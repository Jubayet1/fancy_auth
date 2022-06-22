import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignUp from "./Components/SignUp/SignUp";
import LogIn from "./Components/LogIn/LogIn";
import Profile from "./Components/Profile/Profile";
import NotFound from "./Components/NotFound/NotFound";
import { createContext, useState } from "react";

export const BlogContext = createContext();

function App() {
  const [blogs, setBlogs] = useState([]);
  return (
    <BlogContext.Provider value={[blogs, setBlogs]}>
      <div>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BlogContext.Provider>
  );
}

export default App;
