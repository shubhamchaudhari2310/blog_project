import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import BlogDetails from "./pages/BlogDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/add-blog" element={<Admin />} />
        <Route path="/blog-details/:id" element={<BlogDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
