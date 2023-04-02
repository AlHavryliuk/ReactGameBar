import styled from 'styled-components';
import { mobile } from 'utils/mixins/adaptMixin';

export const BackIcon = styled.span`
  width: 80px;
  font-size: 30px;
  border-radius: 10px;
  background-color: white;
  text-align: center;
`;

export const GoBackWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 40px;

  ${mobile`
      margin-right: 0px;
      margin-bottom: 20px;
  `}
`;
