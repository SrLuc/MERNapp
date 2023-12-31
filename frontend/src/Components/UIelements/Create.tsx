import axios from "axios";
import * as S from "../Styles/ComponentStyles";

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
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input required type="text" name="nome" />
        <label>Strand</label>
        <input required type="text" name="vertente" />
        <button type="submit">Add Dj</button>
      </form>
    </S.StyledCreate>
  );
};

export default Create;
