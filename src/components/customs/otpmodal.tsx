import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import Button from "@/components/customs/button";
interface OtpModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (code: string) => void;
  email: string;
  onSuccess: () => void;
}

const OtpModal: React.FC<OtpModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  email,
  onSuccess,
}) => {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [timer, setTimer] = useState(120);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [isOpen]);

  const handleclick = () => {
    const code = otp.join("");
    if (code.length === 6) {
      onSubmit(code);
      onSuccess();
    } else {
      toast.error("Enter 6 digits ", {
        style: { backgroundColor: "teal", color: "white" },
      });
    }
  };

  const resendOtp = () => {
    setOtp(Array(6).fill(""));
    setTimer(120);
    inputRefs.current[0]?.focus();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-white w-[500px] p-6 rounded-lg relative shadow-lg ">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-xl"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="text-xl font-semibold text-center mb-2">
          Recover Password
        </h2>
        <p className="text-sm text-center text-gray-600 mb-6">
          A six-digit recovery code has been sent to{" "}
          <span className="font-medium">{email}</span>
        </p>

        <div className="flex justify-between gap-2 mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(ref) => {
                inputRefs.current[index] = ref;
              }}
              type="text"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-10 h-12 border border-gray-300 rounded-md text-center text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              maxLength={1}
            />
          ))}
        </div>

        <p className="text-sm text-center text-red-500 mb-4">
          {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, "0")}{" "}
          mins remaining
        </p>

        <Button label="Confirm OTP" onClick={handleclick} />

        <p className="text-sm text-center mt-4 text-gray-500">
          Didn't get the code?{" "}
          <span
            className="text-blue-600 font-medium cursor-pointer hover:underline"
            onClick={resendOtp}
          >
            Resend
          </span>
        </p>
      </div>
    </div>
  );
};

export default OtpModal;
