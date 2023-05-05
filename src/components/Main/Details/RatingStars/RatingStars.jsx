import React from 'react';
import { nanoid } from 'nanoid';
import starsIcon from '../../../../images/icon-spread.svg';

const RatingStars = ({ rating }) => {
  const simpleRate = rating.toFixed(1);
  const stars = {
    empty: `${starsIcon}#icon-star-empty`,
    half: `${starsIcon}#icon-star-half`,
    full: `${starsIcon}#icon-star-full`,
  };
  const defaultRating = [
    stars.empty,
    stars.empty,
    stars.empty,
    stars.empty,
    stars.empty,
  ];

  return (
    <>
      {defaultRating.map((star, index) => {
        if (index + 1 <= simpleRate) {
          star = stars.full;
        }
        if (index + 1 > simpleRate) {
          if (index + 1 - simpleRate < 1) {
            star = stars.half;
          } else {
            star = stars.empty;
          }
        }
        return (
          <svg height="20" width="20" key={nanoid()}>
            <use href={star}></use>
          </svg>
        );
      })}
    </>
  );
};

export default RatingStars;
