import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import NoPage from "./pages/NoPage";
import PlacesRoute from "./pages/PlacesRoute";
import About from "./pages/About";
import BlogsDetails from "./pages/BlogsDetails";
import Hotel from "./pages/Hotels";
import Guide from "./pages/Guides";
import Transport from "./pages/Transport";
import Package from "./pages/Packages";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/:id" element={<BlogsDetails />} />
          <Route path="best-places" element={<PlacesRoute />} />
          <Route path="about" element={<About />} />
          
          
          <Route path="hotel" element={<Hotel />} />
          <Route path="guide" element={<Guide />} />
          <Route path="transport" element={<Transport />} />
          <Route path="package" element={<Package />} />

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
