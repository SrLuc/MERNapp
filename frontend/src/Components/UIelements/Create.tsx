import axios from "axios";
import * as S from "../Styles/ComponentStyles";
import Header from "./Header";

const Create = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const data = new FormData(e.currentTarget);
    const id = data.get("id");
    const nome = data.get("nome");
    const vertente = data.get("vertente");
    const body = {
      id: id,
      nome: nome,
      vertente: vertente,
    };
    axios.post("http://localhost:4040/user", body);
  };

  return (
    <S.StyledCreate>
      <Header title="Add New Dj" />
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID</label>
          <input type="number" name="id" />
        </div>
        <div>
          <label>Name</label>
          <input required type="text" name="nome" />
        </div>
        <div>
          <label>Strand</label>
          <input required type="text" name="vertente" />
        </div>
        <article>
          <button type="submit">Add Dj</button>
        </article>
      </form>
    </S.StyledCreate>
  );
};

export default Create;
