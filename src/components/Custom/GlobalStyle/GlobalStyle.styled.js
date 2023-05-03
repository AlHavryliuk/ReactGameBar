import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Helvetica Neue', sans-serif;
    background-color: ${({ theme }) => theme.mainBackgroundColor};

    & .swal-modal {
      background-color: ${({ theme }) => theme.headerBackgroundColor};
      border: 0.3px solid white;
    } 

    & .swal-title,
    & .swal-text {
      color: ${({ theme }) => theme.headerTextColor} ;
    }

    & .swal-button{
      background-color: ${({ theme }) => theme.loadMoreBtnColor};
    }

    & .swal-icon--success::before, 
    & .swal-icon--success::after,
    & .swal-icon--success__hide-corners
    {
      background-color: transparent;
    }
  

    & .sl-wrapper {
      background-color: #010101c9 !important;
      & .sl-counter, .sl-close, .sl-prev, .sl-next{
        color:  ${({ theme }) => theme.headerTextColor} !important;
      }
    }
  }
  `;
