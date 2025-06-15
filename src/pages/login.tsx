import Loginform from "../components/loginform";
import Messagesection from "../components/messagesection";

function login() {
  return (
    <div className="flex h-screen">
        <Messagesection/>
      <Loginform/>
     
    </div>
  )
}

export default login;
