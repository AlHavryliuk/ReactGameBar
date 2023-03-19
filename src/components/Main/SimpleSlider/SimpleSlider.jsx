import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useSelector } from 'react-redux';
import { select } from 'store/selectors/selectors';

export const SimpleSlider = () => {
  const screenshots = useSelector(select.screenshots);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        {screenshots &&
          screenshots.map(screen => {
            return (
              <div key={screen}>
                <img src={screen} width="100%" alt="" />
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
