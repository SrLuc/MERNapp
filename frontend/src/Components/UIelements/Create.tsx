import * as S from "../Styles/ComponentStyles";
import Header from "./Header";

const Create = () => {
  return (
    <S.StyledCreate>
      <Header title="Add New Dj" />
      <form action="http://localhost:4040/user" method="POST">
        <div>
          <label>ID</label>
          <input type="number" name="id" />
        </div>
        <div>
          <label>Name</label>
          <input type="text" name="nome" />
        </div>
        <div>
          <label>Strand</label>
          <input type="text" name="vertente" />
        </div>
        <article>
          <button type="submit">Add Dj</button>
        </article>
      </form>
    </S.StyledCreate>
  );
};

export default Create;
