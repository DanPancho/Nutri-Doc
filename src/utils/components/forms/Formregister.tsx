import { ButtonMUI, InputMUI } from "@/components/Inicio Sesion/styles";
import { useForm } from "@/utils/hooks/FormValidation/useForm";
import InfoIcon from "@mui/icons-material/Info";
import React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

const FormRegister = () => {
  const { formikRegister } = useForm();
  const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <form onSubmit={formikRegister.handleSubmit}>
      <InputMUI
        id="email"
        name="email"
        label="Ingrese su correo electrónico"
        variant="standard"
        color="success"
        onChange={formikRegister.handleChange}
        helperText={formikRegister.errors && formikRegister.errors.email}
        sx={{
          "& .MuiFormHelperText-root": {
            color: "red",
          },
        }}
      />
      <br />
      <div style={{ display: "flex", alignItems: "center" }}>
        <InputMUI
          id="password"
          name="password"
          label="Ingrese su contraseña"
          variant="standard"
          color="success"
          type={"password"}
          onChange={formikRegister.handleChange}
          helperText={formikRegister.errors && formikRegister.errors.password}
          sx={{
            "& .MuiFormHelperText-root": {
              color: "red",
            },
          }}
        />
        <div onClick={handleClick} style={{marginLeft: '5px'}}>
          <InfoIcon
            color="warning"
            style={{ cursor: "pointer" }}
            fontSize={"small"}
          />
        </div>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <div style={{ padding: "1.5em" }}>
            <Typography variant="body2" sx={{ paddingBottom: "0.5em" }}>
              La contraseña debe tener:
            </Typography>
            <hr style={{ marginBottom: "0.5em" }} />
            <Typography variant="body2">1. Al menos 8 carácteres </Typography>
            <Typography variant="body2">2. Una letra mayúscula </Typography>
            <Typography variant="body2">3. Un carácter especial </Typography>
          </div>
        </Popover>
      </div>
      <InputMUI
        id="passwordRep"
        name="passwordRep"
        label="Ingrese nuevamente su contraseña"
        variant="standard"
        color="success"
        type={"password"}
        onChange={formikRegister.handleChange}
        helperText={formikRegister.errors && formikRegister.errors.passwordRep}
        sx={{
          "& .MuiFormHelperText-root": {
            color: "red",
          },
        }}
      />
      <br />
      <ButtonMUI variant="contained" type="submit">
        Crear Cuenta
      </ButtonMUI>
    </form>
  );
};

export default FormRegister;
