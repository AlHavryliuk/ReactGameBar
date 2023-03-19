import React from 'react';
import { LightButton } from './LightMode.styled';
import icon from '../../images/icon-spread.svg';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from 'store/themeReducer/themeSlice';
import { select } from './../../store/selectors/selectors';

const sunIcon = `${icon}#icon-sun`;
const moonIcon = `${icon}#icon-moon`;

const LightMode = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector(select.darkMode);

  const handleToggleLightMode = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <LightButton onClick={handleToggleLightMode}>
      <svg width="100%" height="100%">
        <use href={darkMode ? moonIcon : sunIcon}></use>
      </svg>
    </LightButton>
  );
};

export default LightMode;
