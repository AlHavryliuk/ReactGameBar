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
