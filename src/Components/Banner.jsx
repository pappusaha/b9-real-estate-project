import React from 'react';

// md:bg-[url('/Image/img.jpg')] bg-center bg-cover 
const Banner = () => {
    return (
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item   relative w-full ">
        <div
  className="hero min-h-screen bg-cover bg-center"
  style={{
    backgroundImage: "url('/Image/img.jpg')",
  }}>
        </div>
      
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative  w-full  ">
        <div
  className="hero min-h-screen bg-cover bg-center"
  style={{
    backgroundImage: "url('/Image/img2.jpg')",
  }}>
        </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative  w-full  ">
        <div
  className="hero min-h-screen bg-cover bg-center"
  style={{
    backgroundImage: "url('/Image/img3.jpg')",
  }}>
        </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full ">
        <div
  className="hero min-h-screen bg-cover bg-center"
  style={{
    backgroundImage: "url('/Image/img4.jpg')",
  }}>
        </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide5" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full ">
        <div
  className="hero min-h-screen bg-cover bg-center"
  style={{
    backgroundImage: "url('/Image/img5.jpg')",
  }}>
        </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide6" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full ">
        <div
  className="hero min-h-screen bg-cover bg-center"
  style={{
    backgroundImage: "url('/Image/img6.jpg')",
  }}>
    
        </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide5" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;