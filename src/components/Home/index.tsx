import Navbar from "@/components/NavBar";
import { BaseLayout } from "@/components/PreferenciasAlimenticias/styles";
import React from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import SettingsIcon from "@mui/icons-material/Settings";
import AlimentosPreferencias from "@/components/PreferenciasAlimenticias/Preferencias";
import { food } from "@/components/PreferenciasAlimenticias";
import RetosComponent from "../Retos";

const actions = [{ icon: <SettingsIcon />, name: "Share" }];

const HomeComponent = () => {
  return (
    <BaseLayout>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "fixed", bottom: 36, right: 36 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
      <Navbar />
      <>
        <AlimentosPreferencias food={food} />
        <hr />
        <RetosComponent />
      </>
    </BaseLayout>
  );
};

export default HomeComponent;
