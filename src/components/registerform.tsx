import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Input from "./input";
import Button from "./button";
import PasswordToggle from "./passwordtoggle";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Registerform: React.FC = () => {
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [businessname, setBusinessName] = useState("");
  const [employeenumber, setEmployeeNumber] = useState("");
  const [location, setLocationNumber] = useState("");
  const [city, setCityName] = useState("");
  const [country, setCountryName] = useState("");
  const [state, setStateName] = useState("");

  const [isCountryOpen, setIsCountryOpen] = useState(false); // Controls country dropdown
  const [isStateOpen, setIsStateOpen] = useState(false); // Controls state dropdown

  const navigate = useNavigate()
  const hasMinLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const passwordsMatch =
    password && confirmpassword && password === confirmpassword;

  const [errors, setErrors] = useState({
    password: "",
    confirmpassword: "",
    businessname: "",
    employeenumber: "",
    location: "",
    city: "",
    country: "",
    state: "",
  });

  const countries = ["Nigeria", "United States", "Canada", "India", "Germany"];
  const states: { [key: string]: string[] } = {
    Nigeria: ["Lagos", "Abuja", "Kano"],
    UnitedStates: ["New York", "California", "Texas"],
    Canada: ["Ontario", "Quebec", "British Columbia"],
    India: ["Delhi", "Mumbai", "Bangalore"],
    Germany: ["Berlin", "Munich", "Hamburg"],
  };

  const filteredStates = country ? states[country] || [] : [];

  const handleValidation = () => {
    const newErrors = {
      password: "",
      confirmpassword: "",
      businessname: "",
      employeenumber: "",
      employeecount: "",
      location: "",
      city: "",
      country: "",
      state: "",
    };

    if (!password.trim()) newErrors.password = "Password is required!";
    if (!passwordsMatch) newErrors.confirmpassword = "Passwords do not match";
    if (!businessname.trim())
      newErrors.businessname = "Organization name required!";
    if (!employeenumber.trim())
      newErrors.employeenumber = "Number of employee";
    if (!location.trim()) newErrors.location = "Address name is required!";
    if (!city.trim()) newErrors.city = "City name is required";
    if (!country.trim()) newErrors.country = "Country name is required";
    if (!state.trim()) newErrors.state = "State name is required";
    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (handleValidation()) {
      toast.success("Succesfully Registred", {
        style: { backgroundColor: "teal", color: "white" },
      });
      navigate("/")
    }
  };

  const [isEmployeeOpen, setIsEmployeeOpen] = useState(false);
  const employeeRanges = [
    "0-50",
    "50-100",
    "101-500",
    "501-1,000",
    "1,001-5,000",
    "Above 5,000",
  ];

  return (
    <div className="w-full md:w-1/2 h-screen flex flex-col justify-start items-center bg-white overflow-hidden pt-9">
      <div className="w-full max-w-md mr-[-30px]">
        <h2 className="text-2xl font-medium text-black whitespace-nowrap text-left pb-5 ">
          Register your account
        </h2>
      </div>
      <form
       className="w-full px-4 sm:px-6 md:px-8 max-w-sm md:max-w-md lg:max-w-lg text-sm flex flex-col gap-6 mx-auto overflow-y-auto hidden-scrollbar max-h-[90vh] scroll-smooth"    onSubmit={handleSubmit}
      >
        <Input
          label="Business Name"
          type="text"
          value={businessname}
          placeholder="Enter Business Name"
          onChange={(e) => setBusinessName(e.target.value)}
          error={errors.businessname}
        />

        <div className="relative w-full ">
          <Input
            label="Number of Employees"
            type="text"
            placeholder="Number of employees"
            value={employeenumber}
            onChange={(e) => setEmployeeNumber(e.target.value)}
            error={errors.employeenumber}
            readonly={true}
          />
          <FaChevronDown
            className="absolute right-4 top-[46px]  text-gray-500 cursor-pointer"
            onClick={() => setIsEmployeeOpen(!isEmployeeOpen)}
          />

          {/* Dropdown Menu */}
          {isEmployeeOpen && (
            <div className="absolute top-full mt-2 left-0 w-full bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto z-50">
              <ul>
                {employeeRanges.map((range) => (
                  <li
                    key={range}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setEmployeeNumber(range);
                      setIsEmployeeOpen(false);
                    }}
                  >
                    {range}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <Input
          label="Location"
          type="text"
          value={location}
          placeholder="Enter Address"
          onChange={(e) => setLocationNumber(e.target.value)}
          error={errors.location}
        />

        <Input
          label=""
          type="text"
          value={city}
          placeholder="Enter City"
          onChange={(e) => setCityName(e.target.value)}
          error={errors.city}
        />

        <div className="flex w-full gap-4 items-center">
          <div className="relative w-1/2">
            <Input
              label=""
              type="text"
              placeholder="Select Country"
              value={country}
              onChange={(e) => {
                setCountryName(e.target.value);
              }}
              error={errors.country}
              readonly={true}
            />
        
                <FaChevronDown
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation(); // Prevents unwanted bubbling
                setIsCountryOpen(!isCountryOpen);
              }}
            />
            
            

            {isCountryOpen && (
              <div className="absolute top-full mt-2 left-0 w-full bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto z-50">
                <ul>
                  {countries.map((c) => (
                    <li
                      key={c}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setCountryName(c);
                        setStateName(""); // Reset state when a new country is selected
                        setIsCountryOpen(false);
                      }}
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="relative w-1/2">
            <Input
              label=""
              type="text"
              placeholder="Select State"
              value={state}
              onChange={(e) => setStateName(e.target.value)}
              error={errors.state}
              readonly={true}
            />
            <FaChevronDown
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setIsStateOpen(!isStateOpen);
              }}
            />
            {isStateOpen && country && (
              <div className="absolute top-12 left-0 w-full bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto z-50">
                <ul>
                  {filteredStates.map((s) => (
                    <li
                      key={s}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setStateName(s);
                        setIsStateOpen(false);
                      }}
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

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

        <div className="relative w-full">
          <Input
            label="Confirm Password"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Input password"
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={errors.confirmpassword}
            className="w-full pr-10 mt-5"
          />

          <div className="absolute right-3 top-[46px]">
            <PasswordToggle
              showPassword={showConfirmPassword}
              togglePassword={() => setShowConfirmPassword(!showConfirmPassword)}
            />
          </div>
        </div>

        <div className="text-sm">
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
            <FaCheck className="mr-5" /> Must include one special chracter{" "}
          </p>
        </div>

        <Button label="Next" type="submit" onClick={handleSubmit}></Button>
        <ToastContainer />
        <div className="w-full max-w-sm bottom-4 mr-auto text-sm text-gray-600 leading tight mb-5">
          By clicking the button above, you agree to our confidential
          information policies and use of terms. For more information, check out
          our{" "}
          <a href="#" className="text-teal-500 font-semibold">
            Privacy Policy
          </a>
          <p className="text-md mt-10 mr-auto">
            Already have a Mance account?
            <Link to="/" className="text-teal-500 font-semibold ml-2">
              Log In
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Registerform;
