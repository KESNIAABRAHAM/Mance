import { useState } from "react";
import Input from "./input";
import { toast, ToastContainer } from "react-toastify";

const Forgotpasswordform = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({ email: "" });

  const handleValidation = () => {
    const newErrors = { email: "", password: "" };

    if (!email.trim()) newErrors.email = "Email is required!";

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (handleValidation()) {
      toast.success("Email sent check your email", {
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
        <h2 className="text-2xl font-medium text-black mt-8">Reset Password</h2>

        <p className="text-sm text-gray-600">
          
          Enter your registered account email address & we'll send you a
          recovery OTP to reset your password e.g yourmail@gmail.com
        </p>

        <Input
          label="Email"
          type="email"
          value={email}
          placeholder="jondoe@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
        />

        <button type="submit" onClick={handleSubmit} className=" bg-teal-700 text-white p-3 rounded-lg cursor-pointer w-1/4"> Send</button>
        <ToastContainer />
      </form>
    </div>
  );
};

export default Forgotpasswordform;
