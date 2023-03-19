import styled from 'styled-components';

export const LightButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  background-color: ${({ theme }) => theme.lightModeBackground};
  cursor: pointer;
`;
