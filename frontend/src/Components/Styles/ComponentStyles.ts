import styled from "styled-components";

export const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100%;

  ul {
    span {
      h1 {
        padding: 15px;
        font-size: 15px;
      }
    }
  }
`;

export const StyledLi = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  padding: 10px;
  margin: 10px;

  section {
    display: flex;
    justify-content: space-between;
    width: 80%;

    span {
      text-align: center;
      width: 50%;
    }
  }

  div {
    display: flex;
    justify-content: space-around;
    width: 20%;

    button {
      border: none;
      background-color: transparent;
      cursor: pointer;
      font-size: 15px;
    }
  }
`;
