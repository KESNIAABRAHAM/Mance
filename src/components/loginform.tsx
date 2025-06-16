import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Input from "./input";
import Button from "./button";
import PasswordToggle from "./passwordtoggle";
import { Link } from "react-router-dom";

const Loginform: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleValidation = () => {
    const newErrors = { email: "", password: "" };

    if (!email.trim()) newErrors.email = "Email is required!";
    if (!password.trim()) newErrors.password = "Password is required!";

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (handleValidation()) {
      toast.success("Succesfully logged in", {
        style: { backgroundColor: "teal", color: "white" },
      });
    }
  };

  return (
    <div className="w-full max-w-md md:flex flex-col justify-start items-center bg-white pt-12 mt-8 mx-auto">
      <form
        className="w-full max-w-sm text-sm md:max-w-md lg:max-w-lg flex flex-col space-y-6 mx-auto"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-medium text-black mt-8">
          Access your account
        </h2>
        <Input
          label="Email"
          type="email"
          value={email}
          placeholder="jondoe@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
        />

        <div className="relative w-full">
          <Input
            label="Password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
            className="w-full pr-10 mt-5"
          />

          <div className="absolute right-3 top-[46px]">
            <PasswordToggle
              showPassword={showPassword}
              togglePassword={() => setShowPassword(!showPassword)}
            />
          </div>
        </div>

        <div className="flex justify-between w-full text-sm mt-2">
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="remember" className="w-4 h-4" />
            <label htmlFor="remember" className="text-gray-700 text-md">
              Remember me
            </label>
          </div>
          <Link to="/forgotpassword" className="text-teal-700 text-md">
            Forgot Password?
          </Link>
        </div>

        <Button label="Log In" type="submit" onClick={handleSubmit}></Button>
        <ToastContainer />
      </form>
      <div className="flex justify-center mt-6 text-sm md:text-base whitespace-nowrap">
        <p className="text-md">
          Don't have a mance account?
          <Link to="/register" className="text-teal-500 font-semibold ml-2">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Loginform;
