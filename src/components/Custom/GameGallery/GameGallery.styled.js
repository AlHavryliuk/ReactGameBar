import styled from 'styled-components';
import { mobile, tablet } from 'utils/mixins/adaptMixin';

export const GameGalleryContainer = styled.div`
  max-width: 1240px;
  padding: 60px 15px 15px;
  margin: 0 auto;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  position: relative;

  ${tablet`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${mobile`
    grid-template-columns: repeat(1, 1fr);
  `}
`;

export const SectionTitle = styled.h1`
  grid-column: 1 / -1;
  text-align: center;
  color: ${({ theme }) => theme.mainTextColor};
  display: none;

  ${mobile`
    display: block;
  `}
`;
