import styled from 'styled-components';
import { mobile } from 'utils/mixins/adaptMixin';

export const ProfileDataArea = styled.div`
  background-color: ${({ theme }) => theme.subHeaderColor};
  padding: 60px 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;
`;

export const ProfileFormWrapper = styled.div`
  width: 100%;
  text-align: center;
  & > form {
    width: 100%;
  }
`;

export const ProfileTitle = styled.h2`
  font-size: 36px;
  color: ${({ theme }) => theme.headerTextColor};

  ${mobile`
    text-align: center;
  `}
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 15px;
  font-size: 28px;
  color: ${({ theme }) => theme.headerTextColor};

  ${mobile`
    flex-direction: column;
    align-items: center;
  `}

  & > input {
    background: gray;
    border: 1px solid gray;
    text-align: center;
    font-size: 26px;
    color: ${({ theme }) => theme.headerTextColor};
    padding: 2px 5px;
    max-width: 300px;
    width: 100%;

    ${mobile`
    text-align: center;
  `}

    &[readonly] {
      background: transparent;
      border: none;
    }
  }
`;

export const InputSubTitle = styled.h5`
  margin: 0;
`;

export const ChangeButton = styled.button`
  padding: 0 20px;
  border-radius: 10px;

  background-color: ${({ theme }) => theme.headerTextColor};
`;

export const SaveButton = styled.input`
  padding: 10px 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.headerTextColor};
`;

export const ProfileSubBlock = styled.div`
  display: flex;
  justify-content: space-between;

  ${mobile`
    justify-content: center;
    text-align: center;
  `}
`;

export const ProfileButtons = styled.div`
  /* display: flex; */
  /* justify-content: flex-end; */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: black;
  border: none;

  ${mobile`
    justify-content: center;
    gap: 10px
  `}
`;

export const ProfileImage = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  margin: 0 auto;
  border-radius: 5px;
`;
