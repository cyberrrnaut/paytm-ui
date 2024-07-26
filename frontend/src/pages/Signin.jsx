import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { SubHeader } from "../components/SubHeader";
import { InputBox } from "../components/InputBox";
import { BlackButton } from "../components/BlackButton";
import { BottomWarning } from "../components/BottomWarning";


export const Signin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    try {

      console.log(import.meta.env.VITE_API_BASE_URL); // Output: https://paytm-backend-epv2.onrender.com/
      
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/v1/user/signin`, {
        username,
        password
      });
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (err) {
      console.log("Signin Error:", err);
      // Handle error here, e.g., display error message to user
    }
  };

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="bg-white rounded-lg w-80 px-4 p-2 h-max">
          <div className="text-center">
            <Header label={"Sign In"} />
            <SubHeader label={"Enter your credentials to access your account"} />
          </div>
       
          <InputBox onChange={(e) => setUsername(e.target.value)} placeholder={"cyberrrnaut@gmail.com"} type={"email"} label={"Email"} />
          <InputBox onChange={(e) => setPassword(e.target.value)} placeholder={"123456"} type={"password"} label={"Password"} />
          <BlackButton label={"Sign In"} onClick={handleSignIn} />
          <BottomWarning label={"Don't have an account?"} to={"/signup"} buttonText={"Sign Up"} />
        </div>
      </div>
    </div>
  );
};


