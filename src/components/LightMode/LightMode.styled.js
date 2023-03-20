import styled from 'styled-components';

export const LightButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: ${({ theme }) => theme.lightModeBackground};
  cursor: pointer;
`;
