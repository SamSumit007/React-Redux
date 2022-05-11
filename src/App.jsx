import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Register } from "./components/Register";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/login/Login";
 import history  from "./redux/history";
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";
import { Dashboard } from "./components/Dashboard";



function App() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate()
  const error = useSelector((store) => store.reg.error)
  

  return (
    <div className="App">
      <Routes >
        <Route path="/" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;