import axios from "axios";


// creating a reausable instance for all api calls
// http://localhost:3000/users ---> user (example)

export const apiClient = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_BASE_URL,
    headers: {
        "Content-Type":"application/json"
    }
})

//generating the token
//interceptors are used to check who u r (admin dealer public) and what access (authorization) we have for the app
apiClient.interceptors.request.use(
    (config) => {
        let token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config;
    },
    (error)=>Promise.reject(error)
)

// handling the response 
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if(error.response?.status==401){ //unauthorized user
            localStorage.removeItem("token");
            localStorage.removeItem("user"); //optional
            window.location.href="/login"
        }
        return Promise.reject(error);
    }
)

//generating dummy token simulation (actually it will be genearted in backend)

export const mockAuth = {
    generateToken: (user) => {
        return `mock_auth ${user.id}_${Date.now()}`
    }
}