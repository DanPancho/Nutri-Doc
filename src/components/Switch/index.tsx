import React, { useState } from "react";
import { Switch } from "@mui/material";

const SwitchComponent = () => {
  const [checked, setChecked] = useState(true);
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <>
      <Switch checked={checked} onChange={handleChange} />
    </>
  );
};

export default SwitchComponent;
