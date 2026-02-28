import Footer from "./components/footer";
import LenisScroll from "./components/lenis";
import AboutSection from "./sections/about-section";
import ContactSection from "./sections/contact-section";


import HeroSection from "./sections/hero-section";
import ProjectsSection from "./sections/projects-section";


export default function App() {
    return (
        <main className="max-md:px-4">
            <LenisScroll />
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
           
    
            
            <ContactSection />
            <Footer />
        </main>
    )
}
