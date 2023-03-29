import styled from 'styled-components';
import { mobile } from 'utils/mixins/adaptMixin';

export const GenreItemCard = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 250px;
  background-image: linear-gradient(45deg, black, transparent);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);

    ${mobile`
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  `}
  }

  & h2 {
    color: white;
  }
`;

export const GenreBackground = styled.img`
  width: 100%;
  z-index: -1;
  position: absolute;
  object-fit: cover;
  height: 250px;
  border-radius: 5px;
`;
