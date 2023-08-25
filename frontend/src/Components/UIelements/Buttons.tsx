import * as S from "../Styles/ComponentStyles";
import axios, { AxiosResponse } from "axios";

interface BtnProps {
  children?: React.ReactNode;
  id?: number;
}

export const DeleteButton = ({ children, id }: BtnProps) => {
  const deleteUser = () => {
    const url = `http://localhost:4040/user/${id}`;
    axios
      .delete(url)
      .then((response: AxiosResponse) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  };

  return (
    <S.StyledDeleteBtn
      onClick={() => {
        deleteUser();
      }}
    >
      {children}
    </S.StyledDeleteBtn>
  );
};
