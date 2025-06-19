import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Benefits from "@/components/Benefits";
import MainFeature from "@/components/MainFeature";
import PopularCourses from "@/components/PopularCourses";
import LiveChat from "@/components/LiveChat";
import Footer from "@/components/Footer";

const ELearn = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <HeroSection />
      <Benefits />
      <MainFeature />
      <PopularCourses />
      <LiveChat />
      <Footer />
    </div>
  );
};

export default ELearn;
