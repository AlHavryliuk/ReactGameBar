import { keyframes } from 'styled-components';

export const lineAnimation = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 120%;
  }
`;

export const SmoothAppearance = keyframes` 
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
`;

export const arrowMove = keyframes` 
  from {
    transform: translateX(42px);
  } to {
    transform: translateX(0);
  }

`;

export const ratingMove = keyframes`
  0%{
    transform: translateY(90px);
  }
  100%{
    transform: translateY(0);
  }
`;

export const searchMove = keyframes`
  0%{
    transform: translateY(-100px);
  }
  100%{
    transform: translateY(0);
  }
`;

export const extendNav = keyframes`
  0%{
    width: 0;
  }
  100%{
    width: 100%;
  }
`;

export const sliderSubHeader = keyframes`
  0%{
    height: 0px;
    padding: 0px;
  
  }
  100%{
    height: 30px;
    padding: 10px 0;
    
  }
`;

export const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
  `;

export const rotateX = keyframes`
  from {
    transform: rotateX(0);
  }
  to {  
    transform: rotateX(360deg); }
  `;

export const halfRotateX = keyframes`
  from {
    transform: rotateX(0);
    background-color: white;
  }
  to {  
    transform: rotateX(180deg);
    background-color: rosybrown }
  `;

export const moveAboutUnderline = keyframes`
  0% {
    width: 0%
  }
  100% {
    width: calc(100% + 80px);
  }`;

export const halfMoveAboutUnderline = keyframes`
  0% {
    width: 0%
  }
  100% {
    width:65%;
  }`;

export const heightRise = keyframes`
    0% {
    height: 0%
  }
  100% {
    height: 100%;
  }`;
