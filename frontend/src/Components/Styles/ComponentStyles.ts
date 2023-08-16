import styled from "styled-components";

export const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;

    li {
      display: flex;
      justify-content: space-between;
    }
  }
`;
