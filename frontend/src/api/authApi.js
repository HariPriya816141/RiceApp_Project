import { apiClient } from "./config";

// LOGIN
export const loginUser = async (email, password) => {
  try {
    const res = await apiClient.post("/auth/login", {
      email,
      password,
    });

    const { user, token } = res.data;

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    return { user, token };
  } catch (error) {
    throw error.response?.data || { message: "Login failed" };
  }
};

// REGISTER
export const registerUser = async (userData) => {
  try {
    const res = await apiClient.post("/auth/register", userData);
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Registration failed" };
  }
};

// LOGOUT
export const logoutUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};
