
import './App.css';
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home.jsx";
// import StudyInCountries from "./components/StudyInCountries";
import AboutUsDetail from './components/AboutUsDetail.jsx';
import OurServicesDetails from './components/OurServicesDetails.jsx';
import ContactUs from './components/ContactUs.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
 
  return (
   <>
    <div className="overflow-hidden ">
      <ScrollToTop>
      <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/home" element={<Home />} exact />
          <Route path="/about" element={<AboutUsDetail />} exact />
          <Route path="/service" element={<OurServicesDetails />} exact />
          
      
          <Route path="/contact" element={<ContactUs />} exact />
         <Route path="*" element={<NotFound />} exact />
        </Routes>

      </ScrollToTop>
    </div>

   </>
  );
}

export default App;
