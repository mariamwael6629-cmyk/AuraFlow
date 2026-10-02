import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import StatsBar from "../components/landing/StatsBar";
import Features from "../components/landing/Features";
import AiAssistant from "../components/landing/AiAssistant";
import Integrations from "../components/landing/Integrations";
import Templates from "../components/landing/Templates";
import Pricing from "../components/landing/Pricing";
import Faq from "../components/landing/Faq";
import CtaBanner from "../components/landing/CtaBanner";
import Footer from "../components/landing/Footer";

export default function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsBar />
      <div className="divider"></div>
      <Features />
      <div className="divider"></div>
      <AiAssistant />
      <div className="divider"></div>
      <Integrations />
      <div className="divider"></div>
      <Templates />
      <div className="divider"></div>
      <Pricing />
      <div className="divider"></div>
      <Faq />
      <div className="divider"></div>
      <CtaBanner />
      <Footer />
    </>
  );
}
