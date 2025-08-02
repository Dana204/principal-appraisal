/** @format */

import HomeSection from "./components/sections/HomeSection/HomeSection";
import { AboutSection } from "./components/sections/Administration/Administration";
import ServicesSection from "./components/sections/ServicesSection/ServicesSection";
import NewsSection from "./components/sections/NewsSection/NewsSection";
import NetworkSection from "./components/sections/NetworkSection/NetworkSection";
import ContactSection from "./components/ContactSection/ContactSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <HomeSection />
      <Admini />
      {/* <AboutSection />

			<ServicesSection />
			<NetworkSection />
			<NewsSection />
			<ContactSection />
			<Footer /> */}
    </>
  );
}

export default App;
