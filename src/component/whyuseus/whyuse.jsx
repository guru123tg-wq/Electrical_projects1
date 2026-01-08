import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './whyuse.css';

const whyData = [
  { title: "Fans for Every Space", image: "https://images.unsplash.com/photo-1591129841117-3adfd313e34f?q=80&w=800" },
  { title: "Digital Meters with Accuracy", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800" },
  { title: "All Your Plumbing Needs", image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=800" },
  { title: "Complete Range of Electricals", image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800" }
];

const WhyChooseUs = () => {
  return (
    <section className="why-us-section">
      <div className="section-container">
        {/* Header Section */}
        <div className="section-header">
          <div className="header-left">
            <span className="accent-red-line"></span>
            <h2 className="section-title">Why Choose Us</h2>
          </div>
          <p className="header-tagline">Genuine Brands. Bulk Stock. Site-Ready Delivery.</p>
        </div>

        {/* Slider Section */}
        <div className="why-slider-wrapper">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1.2}
            centeredSlides={true}
            loop={true}
            navigation={{
              nextEl: '.custom-next-btn',
              prevEl: '.custom-prev-btn',
            }}
            breakpoints={{
              768: { slidesPerView: 2, centeredSlides: false },
              1024: { slidesPerView: 3, centeredSlides: false }
            }}
          >
            {whyData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="feature-full-card">
                  <img src={item.image} alt={item.title} className="card-bg-img" />
                  <div className="card-content-overlay">
                    <h3 className="card-feature-title">{item.title}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <button className="custom-prev-btn" aria-label="Previous slide">&#10094;</button>
          <button className="custom-next-btn" aria-label="Next slide">&#10095;</button>
        </div>

        {/* Action Button */}
        <div className="brochure-btn-container">
          <button className="download-brochure-btn">Download Our Brochure</button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;