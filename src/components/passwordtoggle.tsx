import { FaEye, FaEyeSlash } from "react-icons/fa";

interface PasswordToggleProps {
  showPassword: boolean;
//   showConfirmPassword: boolean;
  togglePassword: () => void;
}
const passwordtoggle: React.FC<PasswordToggleProps> = ({
  showPassword,
  togglePassword,
}) => {


  return (
    <button
      type="button"
      onClick={togglePassword}
      className="text-gray-500 cursor-pointer  absolute right-3 "
    >
      {showPassword ? <FaEyeSlash /> : <FaEye />}
      {/* {showConfirmPassword ? <FaEyeSlash /> : <FaEye />} */}
    </button>
  );
};

export default passwordtoggle;
