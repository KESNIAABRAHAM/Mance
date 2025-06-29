import Svglogo from "@/components/customs/svglogo";
import user from "@/assets/User.png";
function messagesection() {
  return (
    <div className="hidden md:flex w-1/2 bg-teal-700  flex-col justify-center items-center  text-white p-12 h-screen">
      <div className="absolute top-4 left-20">
        <Svglogo/>
      </div>
      <div className="justify-center text-center mb-10">
        <p className="text-lg mb-5">Message from the CPO</p>
        <p className="text-2xl font-bold text-center w-3/5 mx-auto">
          “Transforming and maintaining the employee’s performance ratio has
          been our top priority.”
        </p>

        <div className="flex flex-row  items-center bg-white/20 backdrop-blur-md rounded-3xl w-1/5 mt-10 mx-auto">
          <img src={user} alt="Profile" className="mr-1" />
          <p className="text-white text-lg">Larry Odunuga</p>
        </div>

        <p className="mt-50 text-sm">© 2022 Monetize. All rights reserved</p>
      </div>
    </div>
  );
}

export default messagesection;
