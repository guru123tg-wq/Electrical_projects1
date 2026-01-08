import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './Client.css';

const reviews = [
  {
    text: "Got branded wires and switches for our flat. Owner was very polite. Explained wire load properly. Reasonable pricing. Billing was clean. Nalla experience.",
    name: "Karthikeyan",
    title: "Project Manager"
  },
  {
    text: "Na romba places la poi paathen. But finally found proper plumbing elbows, taps and couplers here. Even for rare sizes. Very helpful anna at the counter.",
    name: "Ramesh",
    title: "Electrical Contractor"
  }
];

export default function ClientTestimonials() {
  return (
    <section className="testimonials-section">
      <div className="section-container">
        
        {/* Header Area */}
        <div className="section-header">
          <div className="title-group">
            <span className="accent-red-line"></span>
            <h2 className="main-title">Client Testimonials</h2>
          </div>
          <p className="sub-text">What Our Customers Say</p>
        </div>

        {/* Slider Area */}
        <div className="testimonials-wrapper">
          <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: '.testi-next',
              prevEl: '.testi-prev',
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
            }}
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial-card">
                  {/* Star Rating */}
                  <div className="star-rating">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="star">★</span>
                    ))}
                  </div>
                  
                  <p className="review-text">"{review.text}"</p>
                  
                  <div className="client-info">
                    <h4 className="client-name">{review.name}</h4>
                    <p className="client-role">{review.title}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <button className="testi-prev" aria-label="Previous slide">&#10094;</button>
          <button className="testi-next" aria-label="Next slide">&#10095;</button>
        </div>
      </div>
    </section>
  );
}