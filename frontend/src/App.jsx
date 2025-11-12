import { useUser } from "@clerk/clerk-react";
import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router";
import DashBoard from "./pages/DashBoard";
import HomePage from "./pages/HomePage";
import ProblemsPage from "./pages/ProblemsPage";

function App() {
  const { isSignedIn,isLoaded } = useUser(); 

  if(!isLoaded) return null;

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={!isSignedIn ? <HomePage /> : <Navigate to="/dashboard" />}
        />
        <Route
          path="/dashboard"
          element={isSignedIn ? <DashBoard /> : <Navigate to="/" />}
        />
        <Route
          path="/problems"
          element={isSignedIn ? <ProblemsPage /> : <Navigate to="/" />}
        />
      </Routes>

      <Toaster position="top-right" />
    </>
  );
}

export default App;
