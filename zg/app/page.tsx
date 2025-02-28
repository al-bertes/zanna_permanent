import About from "./components/about";
import Contact from "./components/contact";
import Explore from "./components/explore";
import Footer from "./components/footer";
import Header from "./components/header";
import Services from "./components/services";
import Top from "./components/top";
import WhyUs from "./components/why-us";

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
