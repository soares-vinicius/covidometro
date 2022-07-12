import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto 20px;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.06);
  border-radius: 5px;
  text-align: center;

  .card__indicators {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    > div {
      width: 33%;
      min-height: 90px;
    }
  }
`;
