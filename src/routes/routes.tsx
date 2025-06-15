import Login from "../pages/login"
import Register from "../pages/register";
import Forgotpassword from "../pages/forgotpassword";

interface RouteType {
  path: string;
  element: React.ReactNode;
}

const routes: RouteType[] = [
{path:"/", element: <Login/>},
{path:"/register", element: <Register/>},
{path:"/forgotpassword", element:<Forgotpassword/>}

];
  

export default routes;
