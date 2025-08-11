import { useState } from "react";
import { Card, Button, Divider, Typography, Form, Input } from "antd";
const { Title, Text } = Typography;
import { loginUser, registerUser } from "../../api/authApi";
import { useAuth } from "../../store/context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {setUserAndToken, error} = useAuth();


  // function to handle login user and register user
  const handleFinish = async(values) => {
    setLoading(true);
    try {
      if(isLogin){
           //login logic
           let response = await loginUser(values.email, values.password)
           if(response.token){
            localStorage.setItem("token", response.token)
             localStorage.setItem("user", JSON.stringify(response.user))
             // rolebased login
             setUserAndToken(response.user, response.token);

             if(response.user.role === 'vendor'){
              navigate('/vendor');
             } else if(response.user.role === 'admin'){
              navigate('/admin');
             }else{
              navigate('/shop');
              console.log("Navigating to shop:", response.user.role);
             }
             console.log('Login response:', response);
           }
      }else {
        //register logic
        // adding role to the new user
        let newUser = {
          ...values, //username, email, password
          role: "public", // add default role
          isActive: true
        }
        await registerUser(newUser)
        setIsLogin(true);
      }
    } catch (error) {
      console.log("error", error.message || "")
    }
  }
  return (
    <div className="login-bg d-flex justify-content-center align-items-center">
      <Card className="p-4 rounded shadow-lg w-100" style={{ maxWidth: 400 }}>
        <div className="text-center mb-3">
          <Title level={3}>
            {isLogin ? "Login to Rice World" : "Register for Rice World"}
          </Title>
          <Text type="secondary fs-6">
            {isLogin
              ? "Sign-in to shop the best rice"
              : "Create an account to get started"}
          </Text>
        </div>

        {/* form layout starts */}
        <Form layout="vertical" onFinish={handleFinish}>
          {!isLogin && (
            <>
            <Form.Item name="name" label="Full Name" rules={[{ required: true, message: "Please input your Username!" },]}>
              <Input prefix={<i className="bi bi-person"></i>} placeholder="Full Name" />
            </Form.Item>
            </>
          )}
          <Form.Item name="email" label="Email" rules={[{ required: true, message: "Please input your EmailID!" },]}>
              <Input prefix={<i className="bi bi-envelope"></i>} placeholder="Email" />
            </Form.Item>

            <Form.Item name="password" label="Password" rules={[{ required: true, message: "Please input your Password!" },]}>
              <Input prefix={<i className="bi bi-lock"></i>} placeholder="Password" />
            </Form.Item>
            <Button type="primary" htmlType="Submit" block>{isLogin ? "login" : "register"}</Button>
        </Form>
        {/* form layout ends */}
        <Divider orientation="center" className="border-success">OR</Divider>
        <Button type="link" block onClick={() => setIsLogin(!isLogin)} className="text-success fw-bold text-capitalize">
          {!isLogin ? "Already have an account? login" : "Don't have an account? register"}
        </Button>
      </Card>
    </div>
  );
};

export default Login;
