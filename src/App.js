import { BrowserRouter, Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Blog1 from "./components/Blog1";
import Footer from "./components/Footer";
import Blogs from "./components/Blogs";
import LandingPage from "./components/LandingPage";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog1" element={<Blog1 />} />
        {/* <Route path="/blog:id" /> */}
        {/* </Route> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
