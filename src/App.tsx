import "./App.css";
//import Loginpage from "../src/pages/login";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import routes from "./routes/routes";

function App() {
  return (
    <Router>
      <Routes>
         {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
