import styled from "styled-components";

export const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100%;
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

export const StyledHeader = styled.header`
  h1 {
    padding: 15px;
    font-size: 15px;
    margin: 10px;
    background-color: #f5f5f5;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }
`;

export const StyledCreate = styled.section`
  form {
    margin: 10px;
    padding: 40px;
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;

    div {
      width: 60%;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      label {
        margin: 10px;
        font-size: 20px;
      }

      input {
        margin: 10px;
        padding: 20px;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
          rgb(209, 213, 219) 0px 0px 0px 1px inset;
      }
    }

    article {
      width: 40%;
      display: flex;
      align-items: center;
      justify-content: center;

      button {
        font-family: monospace;
        background-color: #f3f7fe;
        color: #3b82f6;
        border: none;
        width: 170px;
        height: 65px;
        transition: 0.3s;

        &:hover {
          background-color: #3b82f6;
          box-shadow: 0 0 0 5px #3b83f65f;
          color: #fff;
        }
      }
    }
  }
`;

export const StyledDeleteBtn = styled.button`
  font-family: monospace;
  background-color: #f3f7fe;
  color: red; 
`

