import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from './component/card/Card';
import BrandsSlider from './component/Slideshow/Brands';
import IndustrySlider from './component/Industrials/industrial';
import WhyChooseUs from './component/whyuseus/whyuse';
import ClientTestimonials from './component/Client/Client';
import ContactSection from './component/contact/contact';





function App() {

  return (
    <div>
      <Navbar />
      <Card/>
      <BrandsSlider/>
      <IndustrySlider/>
      <WhyChooseUs/>
      <ClientTestimonials/>
      <ContactSection/>
      
 
      
      
      
     
    </div>
  );
}

export default App;
