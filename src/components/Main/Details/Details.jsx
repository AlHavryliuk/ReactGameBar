import React from 'react';
import { useSelector } from 'react-redux';
import { select } from 'store/selectors/selectors';
import DetailsProperties from '../DetailsProperties/DetailsProperties';
import { DetailsSubTitle, DetailsText, DetailsBlock, DetailsColorWrapper } from './Details.styled';

const Details = () => {
  const { description_raw } = useSelector(select.selectedGame);

  return (
    <DetailsBlock>
      <DetailsColorWrapper>
        <DetailsSubTitle>Description</DetailsSubTitle>
        <DetailsText>{description_raw}</DetailsText>
      </DetailsColorWrapper>
      <DetailsProperties />
    </DetailsBlock>
  );
};

export default Details;
