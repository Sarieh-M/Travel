import AboutUsSection from "../components/aboutus/AboutUsSection";
import OurServiceSection from "../components/aboutus/OurServicesSection";
import FAQSection from "../components/aboutus/FAQsection";
import './Styling/AboutUs.css';
import Footer from "../components/aboutus/Footer";
const AboutUs: React.FC = () => {
    return <>
    <AboutUsSection/>
    <OurServiceSection/>
    <FAQSection/>
    <Footer/>
    </>
}

export default AboutUs;