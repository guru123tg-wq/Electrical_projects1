import React from 'react';
import './Brands.css';


const BrandsSlider = () => {
 const logos = [
    { name: "Havells", url: "/brands/2.jpg" },
    { name: "RR Kabel", url: "/brands/3.jpg" },
    { name: "Finolex", url: "/brands/4.jpg" },
    { name: "LAPP", url: "/brands/5.jpg" },
    { name: "D-Link", url: "/brands/6.jpg" },
    { name: "Schneider", url: "/brands/7.jpg" },
    { name: "Legrand", url: "/brands/8.jpg" },
    { name: "Siemens", url: "/brands/9.jpg" },
    { name: "Lauritz Knudsen", url: "/brands/10.jpg" },
    { name: "Eaton", url: "/brands/11.jpg" },
  ];

  return (
    <div className="brands-container">
      <div className="section-header">
        <span className="accent-bar"></span>
        <h2 className='p'>Brands</h2>
      </div>
      
      <div className="slider">
        <div className="slide-track">
          {/* Mapping twice for a seamless infinite loop */}
          {[...logos, ...logos].map((logo, index) => (
            <div className="slide-item" key={index}>
              <img 
                src={logo.url} 
                alt={logo.name} 
                title={logo.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandsSlider;