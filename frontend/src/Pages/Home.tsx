import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import Container from "../Components/UIelements/Container";
import ItemList from "../Components/UIelements/ItemList";
import Header from "../Components/UIelements/Header";
import { DeleteButton } from "../Components/UIelements/Buttons";
import BasicModal from "../Components/UIelements/BasicModal";

interface Dj {
  id: number;
  nome: string;
  vertente: string;
}

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
          {repos.map(({ id, nome, vertente }: Dj) => {
            return (
              <ItemList key={id}>
                <section>
                  <span>{id}</span>
                  <span>{nome}</span>
                  <span>{vertente}</span>
                </section>
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
        </ul>
      </Container>
    </>
  );
}

export default Home;
