import { css } from 'styled-components';

export const mobile = content => css`
  @media screen and (max-width: 768px) {
    ${content}
  }
`;

export const tablet = content => css`
  @media screen and (max-width: 1200px) and (min-width: 768px) {
    ${content}
  }
`;
