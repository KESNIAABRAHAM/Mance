import Loginform from "@/components/customs/loginform";
import Messagesection from "@/components/customs/messagesection";

function login() {
  return (
    <div className="flex h-screen">
        <Messagesection/>
      <Loginform/>
     
    </div>
  )
}

export default login;
