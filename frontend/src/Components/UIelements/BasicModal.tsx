import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import * as S from "../Styles/ComponentStyles";
import { UpdateButton } from "../UIelements/Buttons";
import axios from "axios";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface ModalProps {
  nome?: string;
  vertente?: string;
  id?: number;
}

const BasicModal = ({ nome, id }: ModalProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const data = new FormData(e.currentTarget);
    const nome = data.get("nome");
    const vertente = data.get("vertente");
    const body = {
      nome: nome,
      vertente: vertente,
    };
    axios.put(`http://localhost:4040/user/${id}`, body);
  };

  return (
    <div>
      <S.StyledButton onClick={handleOpen}>Update</S.StyledButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Update User - {nome}
          </Typography>
          <S.StyledForm onSubmit={handleFormSubmit}>
            <article>
              <label>New Dj Name</label>
              <input required type="text" name="nome" />
            </article>
            <article>
              <label>Strang</label>
              <input required type="text" name="vertente" />
            </article>
            <UpdateButton id={id}>Update</UpdateButton>
          </S.StyledForm>
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;
