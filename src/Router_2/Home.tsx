import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import "./style.css"
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";


function Home() {

    return (

        <>
          <Navbar />
    
          <main>
            <Routes>

              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
        </>
    );

}


export default Home