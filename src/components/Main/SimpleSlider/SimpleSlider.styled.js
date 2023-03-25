import styled from "styled-components";

export const SlaiderWrapper = styled.div`
  & .slick-arrow::before {
    color: ${({ theme }) => theme.sliderArrow};
  }
`;