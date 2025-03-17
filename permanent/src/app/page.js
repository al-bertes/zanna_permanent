import About from "@/components/ui/about";
import Contact from "@/components/ui/contact";
import Explore from "@/components/ui/explore.tsx";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import Services from "@/components/ui/services";
import Top from "@/components/ui/top";
import WhyUs from "@/components/ui/why-us";

export default function Home() {
  return (
    <div className="bg-[#F1E6E6]">
      <div className="container mx-auto px-4">
        <Header />
        <Top />
        <About />
        <Explore />
        <WhyUs />
        <Services />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
