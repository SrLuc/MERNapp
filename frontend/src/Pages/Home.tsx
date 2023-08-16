import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import Container from "../Components/UIelements/Container";

interface Dj {
  id: number;
  nome: string;
  vertente: string;
}

function Home() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    let url = "http://localhost:4040/user";
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
        <h1>Djs List</h1>
        <ul>
          {repos.map(({ id, nome, vertente }: Dj) => {
            return (
              <li key={id}>
                <span>{nome}</span>
                <span>{vertente}</span>
              </li>
            );
          })}
        </ul>
      </Container>
    </>
  );
}

export default Home;
