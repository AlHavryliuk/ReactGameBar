import styled from 'styled-components';
import { mobile } from 'utils/mixins/adaptMixin';

export const CustomAuthPopup = styled.div`
  background-color: ${({ theme }) => theme.mainBackgroundColor};
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CustomAuthPopupBody = styled.div`
  background-color: ${({ theme }) => theme.headerBackgroundColor};
  /* top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute; */
  max-width: 400px;
  width: 100%;
  /* max-height: 450px; */
  height: auto;
  padding: 25px 25px 90px;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  ${mobile`
      max-width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
  `}
`;

export const CustomAuthPopupContent = styled.div``;

export const CustomPoupHeader = styled.div`
  display: flex;
  justify-content: end;
`;
export const PopopClouseBtn = styled.button`
  font-size: 3rem;
  padding: 5px;
  color: white;
  background-color: transparent !important;
  border: none;
  cursor: pointer;
`;

export const CusomAuthTitle = styled.h1`
  color: white;
  text-align: center;
  text-transform: capitalize;
`;

export const CustomUseForm = styled.div`
  & form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  & input {
    padding: 10px 15px;
    font-size: 16px;
  }

  & .submit-button {
    text-transform: capitalize;
  }
`;
