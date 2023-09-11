import styled from "styled-components";

export const StyledContainer = styled.section``;

export const StyledLi = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 15px;
  margin: 15px 0;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;

  span {
    font-size: 20px;
    text-align: left;
    width: 40%;
  }

  div {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }
`;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:20px 45px 20px 45px ;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export const StyledCreate = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    padding: 15px;

    label {
      font-size: 25px;
    }

    input {
      padding: 15px;
    }

    button {
      margin: 15px 0;
      padding: 15px;
      font-size: 20px;
      border: none;
      background-color: #f3f7fe;

      &:hover {
        background-color: #e7f0fd;
      }
    }
  }
`;

export const StyledDeleteBtn = styled.button`
  margin: 5px 0;
  padding: 3px;
  font-size: 20px;
  color: red;
`;

export const StyledUpdateBtn = styled.button`
  margin: 5px 0;
  padding: 3px;
  font-size: 20px;
`;

export const StyledButton = styled.button`
  margin: 5px 0;
  padding: 3px;
  font-size: 20px;
  color: blue;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  padding: 10px 0;

  article {
    padding: 5px;
    display: flex;
    justify-content: space-between;
  }
`;

export const StyledReverse = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;
