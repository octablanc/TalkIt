import { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import {
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Zoom,
} from "@mui/material";
import { Google, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormContainer,
  SingUpContainer,
} from "./styled-components/Login.styled";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "500px",
  bgcolor: "background.paper",
  boxShadow: 24,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "5px",
};

export default function Login({ open, handleClose }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  function handleChangePassword({ target }) {
    setPassword(target.value);
  }

  function handleChangeEmail({ target }) {
    setEmail(target.value);
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Zoom in={open} style={{ left: 'calc(50% - 237.5px)', top: 'calc(50% - 275px)' }}>
        <Box sx={style}>
          <FormContainer>
            <h2 style={{ marginBottom: "50px" }}>Iniciar sesión</h2>

            <TextField
              id="email"
              label="Email"
              value={email}
              variant="outlined"
              sx={{
                marginBottom: "40px",
                width: "100%",
              }}
              onChange={handleChangeEmail}
            />

            <TextField
              id="password"
              label="Contraseña"
              variant="outlined"
              value={password}
              type={showPassword ? "text" : "password"}
              onChange={handleChangePassword}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                width: "100%",
                marginBottom: "30px",
              }}
            />

            <Button
              color="primary"
              variant="contained"
              style={{
                width: "100%",
                height: "50px",
                marginBottom: "15px",
                textTransform: "none",
              }}
            >
              Iniciar sesión
            </Button>

            <Button
              startIcon={<Google />}
              variant="contained"
              style={{
                width: "100%",
                height: "50px",
                backgroundColor: "#d32323",
                textTransform: "none",
              }}
            >
              Iniciar sesión con Google
            </Button>
          </FormContainer>

          <SingUpContainer>
            <p>
              No tienes una cuenta? <span>Registrate</span>
            </p>
          </SingUpContainer>
        </Box>
      </Zoom>
    </Modal>
  );
}
