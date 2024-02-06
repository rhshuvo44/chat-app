import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { useAuthContext } from "./context/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
function App() {
  const { authUser } = useAuthContext();

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to={"login"} />}
        />
        <Route
          path="login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="signup"
          element={authUser ? <Navigate to="/" /> : <Signup />}
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
