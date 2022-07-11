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

  p {
    font-size: 0.875rem;
    color: #504645;
    max-width: 600px;
    margin: 30px 0 0;
  }

  svg {
    margin-bottom: -100px;
    max-width: 420px;
    width: 100%;
  }

  @media (max-width: 1060px) {
    justify-content: center;
  }
`;
