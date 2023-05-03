import styled from 'styled-components';

export const LoaderMain = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 99;
  left: 0;
  top: 0;
  background-color: ${({ theme }) => theme.popupBackgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;
