import Login from "../pages/login"
import Register from "../pages/register";
import Forgotpassword from "../pages/forgotpassword";
import Dashboard from "../pages/dashboard";
interface RouteType {
  path: string;
  element: React.ReactNode;
}

const routes: RouteType[] = [
{path:"/", element: <Login/>},
{path:"/register", element: <Register/>},
{path:"/forgotpassword", element:<Forgotpassword/>},
{path:"/dashboard", element:<Dashboard/>}


];
  

export default routes;
