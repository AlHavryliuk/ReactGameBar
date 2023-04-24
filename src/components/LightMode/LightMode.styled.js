import styled from 'styled-components';
import { SmoothAppearance } from 'utils/animations/animations';
import { mobile } from 'utils/mixins/adaptMixin';

export const LightButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: ${({ theme }) => theme.lightModeBackground};
  opacity: 0;
  cursor: pointer;
  animation: ${SmoothAppearance} 250ms ease 1200ms forwards;

  ${mobile`
    animation: none;
    opacity: 1;
  `}
`;
