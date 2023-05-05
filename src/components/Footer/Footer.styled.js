import styled from 'styled-components';

export const CustomFooter = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.subHeaderColor};
  border-top: 1px solid ${({ theme }) => theme.headerTextColor};
`;

export const FooterContainer = styled.footer`
  max-width: 1240px;
  padding: 30px 15px;
  text-align: center;
  color: ${({ theme }) => theme.headerTextColor};
  margin: 0 auto;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
