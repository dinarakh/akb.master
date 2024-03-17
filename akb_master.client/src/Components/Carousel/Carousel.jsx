import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//Style
import "./CarouselArrows.css";
import { ContCarousel, ImgCont } from "./Carousel.styled";

//img
import ImgAbsel from "../../Images/CarouselImage/Absel.jpg";
import ImgAurora from "../../Images/CarouselImage/Aurora.jpg";
import ImgAutopart from "../../Images/CarouselImage/Autopart.jpg";
import ImgEAS from "../../Images/CarouselImage/EAS.jpg";
import ImgExide from "../../Images/CarouselImage/Exide.jpg";
import ImgFB from "../../Images/CarouselImage/FB.jpg";
import ImgHugel from "../../Images/CarouselImage/Hugel.jpg";
import ImgIncni from "../../Images/CarouselImage/Incni.jpg";
import ImgMOLL from "../../Images/CarouselImage/MOLL.jpg";
import ImgMUTLU from "../../Images/CarouselImage/MUTLU.jpg";
import ImgPlatin from "../../Images/CarouselImage/Platin.jpg";
import ImgRED from "../../Images/CarouselImage/RED.jpg";

//Svg icon
const SvgArrowsL = (
  <svg
    stroke="currentColor"
    fill="currentColor"
    stroke-width="0"
    viewBox="0 0 512 512"
    height="40px"
    width="25px"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path>
  </svg>
);
const SvgArrowR = (
  <svg
    stroke="currentColor"
    fill="currentColor"
    stroke-width="0"
    viewBox="0 0 512 512"
    height="40px"
    width="25px"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
  </svg>
);

const Carousel = () => {
  const CustomNextArrow = ({ onClick }) => (
    <button type="button" className={`Arrows ArrowsR`} onClick={onClick}>
      {SvgArrowR}
    </button>
  );

  const CustomPrevArrow = ({ onClick }) => (
    <button type="button" className={`Arrows ArrowsL`} onClick={onClick}>
      {SvgArrowsL}
    </button>
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <ContCarousel>
      <Slider {...settings}>
      <ImgCont>
      <img src={ImgAbsel}/>
      </ImgCont>
      <ImgCont>
      <img src={ImgAurora}/>
      </ImgCont>
      <ImgCont>
      <img src={ImgAutopart}/>
      </ImgCont>
      <ImgCont>
      <img src={ImgEAS}/>
      </ImgCont>
      <ImgCont>
      <img src={ImgExide}/>
      </ImgCont>
      <ImgCont>
      <img src={ImgFB}/>
      </ImgCont>
      <ImgCont>
      <img src={ImgHugel}/>
      </ImgCont>
      <ImgCont>
      <img src={ImgIncni}/>
      </ImgCont>
      <ImgCont>
      <img src={ImgMOLL}/>
      </ImgCont>
      <ImgCont>
      <img src={ImgMUTLU}/>
      </ImgCont>
      <ImgCont>
      <img src={ImgPlatin}/>
      </ImgCont>
      <ImgCont>
      <img src={ImgRED}/>
      </ImgCont>
      
      </Slider>
    </ContCarousel>
  );
};

export default Carousel;
