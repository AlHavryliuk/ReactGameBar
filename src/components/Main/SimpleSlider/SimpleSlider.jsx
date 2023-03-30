import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { select } from 'store/selectors/selectors';
import { SlaiderWrapper } from './SimpleSlider.styled';

export const SimpleSlider = () => {
  const screenshots = useSelector(select.screenshots);
  const [lightbox, setLightbox] = useState(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    if (screenshots && screenshots.length && !lightbox) {
      const lb = new SimpleLightbox('.gallery a', { /* options */ });
      setLightbox(lb);
    }
  }, [screenshots, lightbox]);


  return (
    <SlaiderWrapper>
      <Slider {...settings} className="gallery">
        {screenshots &&
          screenshots.map(screen => {
            return (
              <a href={screen} key={screen}>
                <div >
                  <img src={screen} width="100%" alt="" />
                </div>
              </a>
            );
          })}
      </Slider>
    </SlaiderWrapper>
  );
};

export default SimpleSlider;
