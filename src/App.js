import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Blog1 from "./components/Blog1";
import Footer from "./components/Footer";
import Blogs from "./components/Blogs";
import LandingPage from "./components/LandingPage";
import PricingPage from "./components/PricingPage";
import FeaturesPage from "./components/FeaturesPage";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog" element={<Blog1 />}>
          <Route path=":blogID" element={<Blog1 />} />
        </Route>
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/features" element={<FeaturesPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
