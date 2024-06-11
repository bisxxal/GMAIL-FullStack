import {  useState } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom"; 
import Home from "./components/pages/Home";
import OpenMail from "./components/openMail/OpenMail";
import Login from './components/login/Login'
import { useSelector } from "react-redux";
function App() {
  const [count, setCount] = useState(0);

  const {uid , user} = useSelector((store)=>store.appSlice)

  console.log(uid);
  console.log(user);
  return (
    <> 
     { !uid ? <Login />
     
     : <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mail/:id" element={<OpenMail />} />
      </Routes>
      }
    </>
  );
}

export default App;
