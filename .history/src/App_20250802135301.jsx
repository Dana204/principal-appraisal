/** @format */

import HomeSection from "./components/sections/HomeSection/HomeSection";
import ServicesSection from "./components/sections/ServicesSection/ServicesSection";
import NewsSection from "./components/sections/NewsSection/NewsSection";
import NetworkSection from "./components/sections/NetworkSection/NetworkSection";
import ContactSection from "./components/ContactSection/ContactSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            {/* <Route path="/about" element={<About />} /> */}
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
