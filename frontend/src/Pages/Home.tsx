import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import Container from "../Components/UIelements/Container";
import ItemList from "../Components/UIelements/ItemList";
import Header from "../Components/UIelements/Header";
import { DeleteButton } from "../Components/UIelements/Buttons";
import BasicModal from "../Components/UIelements/BasicModal";
import * as S from "../Components/Styles/ComponentStyles";

interface Dj {
  id: number;
  nome: string;
  vertente: string;
}

//ReverseView
interface IReverseView {
  children: React.ReactNode;
}
export const ReverseView = ({ children }: IReverseView) => {
  return <S.StyledReverse>{children}</S.StyledReverse>;
};

function Home() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const url = "http://localhost:4040/user";
    axios
      .get(url)
      .then((response: AxiosResponse) => {
        setRepos(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <Container>
        <ul>
          <Header title="DJs" />
          <ReverseView>
          {repos.map(({ id, nome, vertente }: Dj) => {
            return (
              <ItemList key={id}>
                <span>{nome}</span>
                <span>{vertente}</span>
                <div>
                  <BasicModal
                    nome={nome}
                    key={id}
                    id={id}
                    vertente={vertente}
                  />
                  <DeleteButton id={id}>Delete</DeleteButton>
                </div>
              </ItemList>
            );
          })}
          </ReverseView>
        </ul>
      </Container>
    </>
  );
}

export default Home;
