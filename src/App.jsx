import Home from "./pages/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
      </Routes>
    </>
  );
}

export default App;
