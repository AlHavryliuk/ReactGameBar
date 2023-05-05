import React from 'react';
import { useSelector } from 'react-redux';
import { select } from 'store/selectors/selectors';
import { getLastDate, releaseDate } from 'utils/dateFormatter/dateFormatter';
import platformIcon from '../../../../images/icon-spread.svg';
import {
  CustomPropertyIcons,
  CustomProperyiesList,
  DetailsPropertiesContainer,
  DetailsPropertyWrapper,
  PropertiesSubTitle,
  RateSpan,
} from './DetailsProperties.styled';

const DetailsProperties = () => {
  const {
    rating,
    released,
    genres,
    developers,
    stores,
    parent_platforms,
    updated,
    website
  } = useSelector(select.selectedGame);

  return (
    <DetailsPropertyWrapper>
      <PropertiesSubTitle>Properties</PropertiesSubTitle>
      <DetailsPropertiesContainer>
        <CustomProperyiesList>
          <li>
            <span>Rating:</span>
            <span>
              <RateSpan>{rating}</RateSpan>
            </span>
          </li>
          <li>
            <span>Genre</span> {genres.map(({ name }) => name).join(', ')}
          </li>
          <li>
            <span>Reliase date:</span> {releaseDate(released)}
          </li>
          <li>
            <span>Last updated:</span> {getLastDate(updated)}
          </li>
          <li>
            <span> <a href={website} rel="noreferrer" target="_blank">Official website</a> </span>
          </li>
        </CustomProperyiesList>
        <CustomProperyiesList>
          <li>
            <span>Developers:</span>
            {developers.map(({ name }) => name).join(', ')}
          </li>
          <li>
            <span>Available Stores:</span>
            {stores.map(({ store }) => store.name).join(', ')}
          </li>
          <li>
            <span>Supported Platforms: </span>
            <CustomPropertyIcons>
              {parent_platforms.map(({ platform }) => (
                <li key={platform.id}>
                  <svg width="20" height="20">
                    <use href={`${platformIcon}#icon-${platform.slug}`}></use>
                  </svg>
                </li>
              ))}
            </CustomPropertyIcons>
          </li>
        </CustomProperyiesList>
      </DetailsPropertiesContainer>
    </DetailsPropertyWrapper>
  );
};

export default DetailsProperties;
