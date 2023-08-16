import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

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
      <h1>Djs List</h1>
      <ul>
        {repos.map(({ id, nome }: Dj) => {
          return <li key={id}>{nome}</li>;
        })}
      </ul>
    </>
  );
}

export default Home;
