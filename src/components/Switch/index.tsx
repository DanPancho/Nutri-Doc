import React, { useState } from "react";
import { Switch } from "@mui/material";
import { ITypefood } from "@/interfaces/food/food";

const SwitchComponent = ({
  opcion,
  index,
  config,
}: {
  opcion: number;
  index: number;
  config: ITypefood[] | undefined;
}) => {
  const [checked, setChecked] = useState(config ? config[opcion].foods[index].status !== undefined ? config[opcion].foods[index].status : true : true);  
  const handleChange = () => {
    if (config) {
      setChecked(!checked);
      config[opcion].foods[index].status = !checked;
    }
  };
  return (
    <>
      <Switch checked={checked} onChange={handleChange} />
    </>
  );
};

export default SwitchComponent;
