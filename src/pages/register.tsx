import Registerform from "../components/registerform";
import Messagesection from "../components/messagesection";

const register = () => {
  return (
    <div className="flex h-screen">
      <Messagesection />
      <Registerform />
    </div>
  );
};

export default register;
