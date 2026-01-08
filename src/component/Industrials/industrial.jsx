import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import './industrial.css';

const industries = [
  {
    title: "Commercial Buildings",
    description: "Offices, retail spaces, and malls need efficient electrical and plumbing setups. We supply modular fittings, lighting solutions, DB boxes, and energy meters.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&w=800"
  },
  {
    title: "Contractors & Builders",
    description: "Your go-to supply partner for large-scale construction projects—wires, pipes, switches, panels, and everything in between. Bulk deals and dependable delivery.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&w=800"
  },
  {
    title: "Healthcare Facilities",
    description: "Hospitals and labs require reliable electrical performance and backup systems. We offer MCBs, control panels, timers, and fittings for high-precision environments.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&w=800"
  },
 
  {
    title: "IT Companies",
    description: "IT parks and offices need reliable wiring and metering. We supply branded network cables, backup solutions, DBs, and panels for consistent performance.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&w=800"
  },
  {
    title: "Co Working Space",
    description: "Shared workspaces require safe, efficient fittings. We provide lighting, switches, sockets, fans, and plumbing essentials tailored for co-working infrastructure.",
    image: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&w=800"
  }
];

export default function IndustrySlider() {
  return (
    <section className="industry-section">
      <div className="section-container">
        <div className="section-header">
          <div className="title-group">
            <span className="accent-lines"></span>
            <h2 className="main-title">Industries We Serve</h2>
          </div>
          <p className="sub-text">Reliable Supply for Every Sector's Demands</p>
        </div>

        <div className="swiper-outer-wrapper">
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1.2}
            centeredSlides={true}
            loop={true}
            navigation={{
              nextEl: '.nav-btn-next',
              prevEl: '.nav-btn-prev',
            }}
            breakpoints={{
              640: { slidesPerView: 2, centeredSlides: false },
              1024: { slidesPerView: 3, centeredSlides: false },
            }}
            className="industry-swiper"
          >
            {industries.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="industry-card">
                  <div className="image-container">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="content-container">
                    <h3 className="card-title">{item.title}</h3>
                    <p className="card-desc">{item.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="nav-btn-prev" aria-label="Previous slide">&#10094;</button>
          <button className="nav-btn-next" aria-label="Next slide">&#10095;</button>
        </div>
      </div>
    </section>
  );
}