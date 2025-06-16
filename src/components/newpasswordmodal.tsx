import React, { useState } from "react";
import Input from "../components/input";
import Button from "../components/button";
import PasswordToggle from "../components/passwordtoggle";
import { toast } from "react-toastify";
import { FaCheck } from "react-icons/fa";
import { useNavigate} from "react-router-dom";

interface NewPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;  
  onSubmit: (password: string) => void;
}

const NewPasswordModal: React.FC<NewPasswordModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const hasMinLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const passwordsMatch = password && password === confirmPassword;

  const [errors, setErrors] = useState({ password: "", confirmPassword: "" });

  const navigate = useNavigate();

  const handleValidation = () => {
    const newErrors = { password: "", confirmPassword: "" };

    if (!password.trim()) newErrors.password = "Password is required!";
    if (!passwordsMatch) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    else{
        toast.success("succesfully registered");
        navigate("/")
    }
    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === "");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[500px]  relative">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-xl"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="text-xl font-semibold text-center mb-4">
          Set New Password
        </h2>

        <div className="relative w-full">
          <Input
            label="Password"
            type={showPassword ? "text" : "password"}
            placeholder="New password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
            
          />
          <div className="absolute right-3 top-[46px] ">
            <PasswordToggle
              showPassword={showPassword}
              togglePassword={() => setShowPassword(!showPassword)}
            />
          </div>
        </div>

        <div className="relative w-full mt-4">
          <Input
            label="Confirm Password"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Enter password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={errors.confirmPassword}
            
           
          />
          <div className="absolute right-3 top-[46px] ">
            <PasswordToggle
              showPassword={showConfirmPassword}
              togglePassword={() => setShowConfirmPassword(!showConfirmPassword)}
            />
          </div>
        </div>

        <div className="text-sm pt-5 pb-4">
          <p
            className={`flex items-center text-gray-400 space-y-5 ${
              hasMinLength ? "text-green-500" : ""
            }`}
          >
            <FaCheck className="mr-5" /> Must have 8 characters
          </p>
          <p
            className={`flex items-center text-gray-400 ${
              hasUppercase ? "text-green-500" : ""
            }`}
          >
            <FaCheck className="mr-5" /> Must include capital letters
          </p>
          <p
            className={`flex items-center text-gray-400 ${
              hasLowercase ? "text-green-500" : ""
            }`}
          >
            <FaCheck className="mr-5" /> Must include lowercase letters
          </p>
          <p 
            className={`flex items-center text-gray-400 ${
              hasNumber ? "text-green-500" : ""
            }`}
          >
            <FaCheck className="mr-5" /> Must include one number
          </p>
          <p
            className={`flex items-center text-gray-400 ${
              hasSpecialChar ? "text-green-500" : ""
            }`}
          >
            <FaCheck className="mr-5" /> Must include one special chracter
          </p>
        </div>

        <Button label="Confirm Password" onClick={handleValidation} />
      </div>
    </div>
  );
};

export default NewPasswordModal;
