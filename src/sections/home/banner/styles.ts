import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1230px;
  margin: 70px auto 0;
  padding: 0 20px;

  .banner__text {
    p {
      font-size: 0.875rem;
      color: #504645;
      max-width: 600px;
      margin: 25px 0 0;
    }
  }

  .banner__image {
    position: relative;
    height: 280px;
    max-width: 420px;
    width: 100%;

    svg {
      top: -25px;
      position: absolute;
      max-width: 420px;
      width: 100%;
      right: 0;
      z-index: -1;
    }
  }

  @media (max-width: 1060px) {
    justify-content: center;
  }
`;
