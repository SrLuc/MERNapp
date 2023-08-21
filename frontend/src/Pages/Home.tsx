import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import Container from "../Components/UIelements/Container";
import ItemList from "../Components/UIelements/ItemList";

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
          <span>
            <h1>Djs List</h1>
          </span>
          {repos.map(({ id, nome, vertente }: Dj) => {
            return (
              <ItemList key={id}>
                <section>
                  <span>{id}</span>
                  <span>{nome}</span>
                  <span>{vertente}</span>
                </section>
                <div>
                  <button>Editar</button>
                  <button>Excluir</button>
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
