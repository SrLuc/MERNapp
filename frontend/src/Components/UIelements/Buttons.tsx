import * as S from "../Styles/ComponentStyles";
import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";

interface BtnProps {
  children?: React.ReactNode;
  id?: number;
}

export const DeleteButton = ({ children, id }: BtnProps) => {
  const [isDeleted, setIsDeleted] = useState(false);

  const deleteUser = () => {
    const url = `http://localhost:4040/user/${id}`;
    axios
      .delete(url)
      .then((response: AxiosResponse) => {
        setIsDeleted(true);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  };

  useEffect(() => {
    if (isDeleted) {
      window.location.reload();
    }
  });

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

