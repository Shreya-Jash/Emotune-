import { ToastContainer } from "react-toastify";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <Router>
      <div>
        <ToastContainer />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/dashboard" Component={Dashboard} />
        </Routes>
      </div>
    </Router>
  );
}
