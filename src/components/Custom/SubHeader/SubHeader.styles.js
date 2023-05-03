import styled from 'styled-components';
import { sliderSubHeader } from 'utils/animations/animations';
import { mobile } from 'utils/mixins/adaptMixin';

export const CustomSubHeader = styled.div`
  max-width: 1240px;
  padding: 0 15px;
  margin: 0 auto;

  justify-content: center;
  align-items: center;
`;

export const CustomSubWrapper = styled.div`
  width: 100%;
  border-bottom: 0.3px solid white;
  padding: 0;
  height: 0;
  background-color: ${({ theme }) => theme.subHeaderColor};
  animation: ${sliderSubHeader} 300ms ease 900ms forwards;

  overflow: hidden;
  ${mobile`
    height: auto;
    animation: none;
  `}
`;

export const MobileAuth = styled.div`
  display: none;

  ${mobile`
    display: block;
  `}

  & button {
    width: auto;
    max-width: max-content;
  }
`;
