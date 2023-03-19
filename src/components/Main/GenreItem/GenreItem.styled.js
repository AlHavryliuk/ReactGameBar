import styled from 'styled-components';

export const GenreItemCard = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 250px;
  background-image: linear-gradient(45deg, black, transparent);
  border-radius: 5px;

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
