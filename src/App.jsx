import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/dashboard" Component={Dashboard} />
        </Routes>
      </div>
    </Router>
  );
}
