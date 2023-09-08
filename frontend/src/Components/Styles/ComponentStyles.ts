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
  justify-content: center;
  padding: 15px;
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

//button to detele
export const StyledDeleteBtn = styled.button`
  margin: 5px 0;
  padding: 3px;
  font-size: 20px;
  color: red;
`;

//button to update into modal
export const StyledUpdateBtn = styled.button``;

//styled button
export const StyledButton = styled.button`
  margin: 5px 0;
  padding: 3px;
  font-size: 20px;
  color: blue;
`;

//modal styles
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 15px;
  justify-content: space-around;
`;

//reverser view of the list
export const StyledReverse = styled.div`
  display: flex;
  flex-direction: column-reverse;
  
`