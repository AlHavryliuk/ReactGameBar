import styled from 'styled-components';
import { mobile } from 'utils/mixins/adaptMixin';

export const StyledHeaderContainer = styled.div`
  max-width: 1240px;
  padding: 0 15px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  ${mobile`
      padding: 0 35px;
      font-size: 40px;
  `}
`;
