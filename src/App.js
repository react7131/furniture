import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Category from "./components/Category";
import Features from "./components/Features";
import Products from "./components/Products";
import NewsLetter from "./components/NewsLetter";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-white">
      <Navbar />
      <Hero />
      <About />
      <Category />
      <Features /> 
      <Products />
      <Testimonial />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
