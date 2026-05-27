import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import FeatureSection from "../components/FeatureSection";
import FeatureInternship from "../components/FeatureInternship";
import Footer from "../components/Footer";
function Home(){
    return(
        <div>
            <Navbar />
            <HeroSection/>
            <StatsSection />
            <FeatureSection />
            <FeatureInternship />
            <Footer />
            
        </div>
    );
}
export default Home
