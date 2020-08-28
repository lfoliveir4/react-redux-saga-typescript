import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  flex-wrap: wrap;

  ul {
    width: 400px;
    margin: 30px 0;

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 7px 0;
      border: 0.5px solid #333;
      list-style: none;
      margin-bottom: 20px;
    }
  }

  p {
    margin-top: 30px;
  }
`;
