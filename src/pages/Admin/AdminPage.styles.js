import styled from 'styled-components';

export const AdminContainer = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 60px auto;
`;

export const AdminTitle = styled.h1`
  color: ${({ theme }) => theme.headerTextColor};
  text-align: center;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const StyledTableHeader = styled.th`
  background-color: ${({ theme }) => theme.headerTextColor};
  padding: 10px;
  text-align: left;
  font-weight: bold;
  border-bottom: 1px solid ${({ theme }) => theme.headerTextColor};
`;

export const StyledTableRow = styled.tr`
  &:nth-child(even) {
    background-color: ${({ theme }) => theme.headerTextColor};
  }
`;

export const StyledTableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.headerTextColor};
`;

export const StyledAvatarImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
`;

export const StyledTableWrapper = styled.div`
  overflow-x: auto;
`;
