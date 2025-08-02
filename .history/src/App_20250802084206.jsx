/** @format */

import HomeSection from "./components/sections/HomeSection/HomeSection";
import ServicesSection from "./components/sections/ServicesSection/ServicesSection";
import NewsSection from "./components/sections/NewsSection/NewsSection";
import NetworkSection from "./components/sections/NetworkSection/NetworkSection";
import ContactSection from "./components/ContactSection/ContactSection";
import Footer from "./components/Footer/Footer";
import { Administration } from "./components/sections/Administration/Administration";

function App() {
  return (
    <>
      <HomeSection />
      <Administration />
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
