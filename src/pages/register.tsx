import Registerform from "@/components/customs/registerform";
import Messagesection from "@/components/customs/messagesection";

const register = () => {
  return (
    <div className="flex h-screen">
      <Messagesection />
      <Registerform />
    </div>
  );
};

export default register;
