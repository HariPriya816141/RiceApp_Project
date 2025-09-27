import { createContext, useContext, useReducer, useEffect } from "react";
import authReducer from "../reducers/authReducer";
import { loginUser, logoutUser, registerUser } from "../../api/authApi";
import { useNavigate } from "react-router-dom";

// creating the store
export const AuthContext = createContext();
console.log("context", AuthContext); // returns provider and consumer

//creating initial state
const initialState = {
  user: null,
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  role: null,
  loading: true,
  error: null,
};

// dispatch: action to reducers
// reducers: these are pure functions where actions are carried out to update state variable
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // programmatic navigation
  const navigate = useNavigate(); 

  // useeffect to get the data from local stoarge
  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    // condition to check whether the data exists or not
    if (token && user) {
      try {
        // parseing the data (converts stringified format into readable format)
        const userData = JSON.parse(user);
        dispatch({
          type: "LOGIN_SUCCESS", // action -> to reducers
          payload: { user: userData, token }, // information/data passed to reducers
        });
      } catch (error) {
        dispatch({ type: "LOADING_COMPLETE" });
      }
    } else {
      dispatch({ type: "LOADING_COMPLETE" });
    }
  }, []); // components loads only once at mounting phase (initially when the browser is loaded)

  // useEffect to redirect the user to their respective UIs based on the role
  useEffect(() => {
    if (state.isAuthenticated && !state.loading) {
      // checking if user is logged in or not
      if (state.role === "admin") {
        return navigate("/admin");
      } else if (state.role === "vendor") {
        // checking if user is a dealer
        return navigate("/vendor");
      } else {
        return navigate("/shop"); // default navigation if user's role is public
      }
    }
  }, [state.isAuthenticated, state.role, state.loading]); // runs on change of every variable in the dependency array

  // login state
  const login = async (email, password) => {
    try {
      dispatch({ type: "LOGIN_START" }); // action-reducers--state -> ui
      const { user, token } = await loginUser(email, password);
      dispatch({ type: "LOGIN_SUCCESS", payload: { user, token } });
      return { success: true };
    } catch (error) {
      dispatch({
        type: "LOGIN_ERROR",
        payload: error.message || "Login failed",
      });
      return { success: false, error: error.message || "Login failed" };
    }
  };

  // register state
  const register = async (userData) => {
    try {
      dispatch({ type: "REGISTER_START" }); // action-reducers--state -> ui
      const { user, token } = await registerUser(userData);
      dispatch({ type: "REGISTER_SUCCESS", payload: { user, token } });
      return { success: true };
    } catch (error) {
      dispatch({
        type: "REGISTER_ERROR",
        payload: error.message || "Registration failed",
      });
      return { success: false, error: error.message || "Registration failed" };
    }
  };

  const logout = () => {
    logoutUser();
    dispatch({ type: "LOGOUT" });
    navigate("/shop"); // redirect to login on logout
  };

  const setUserAndToken = (user, token) => {
    dispatch({ type: "LOGIN_SUCCESS", payload: { user, token } });
  };

  const value = {
    ...state,
    login,
    register,
    logout,
    setUserAndToken,
  };

  if (state.loading) return <h6>Loading...</h6>;

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
