import Navbar from "@/components/NavBar";
import { BaseLayout } from "@/components/PreferenciasAlimenticias/styles";
import React, { useEffect, useState } from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import SettingsIcon from "@mui/icons-material/Settings";
import AlimentosPreferencias from "@/components/PreferenciasAlimenticias/Preferencias";
import RetosComponent from "../Retos";
import { useRouter } from "next/router";
import { CrudService } from "@/services/crud";
import { IFoods, ITypefood } from "@/interfaces/food/food";
import { decryptUID } from "@/utils/encryption/encryptions";

const actions = [
  { icon: <SettingsIcon />, name: "Share", src: "preferencias-alimenticias" },
];

const HomeComponent = () => {
  const router = useRouter();
  const { getById } = CrudService();
  const [data, setData] = useState<IFoods[]>();
  const storedEncryptedUID =
    typeof window !== "undefined" && window.localStorage.getItem("UDEN");
  let userUID = "";
  if (storedEncryptedUID !== null && storedEncryptedUID) {
    userUID = decryptUID(storedEncryptedUID);
  }
  const user: any = getById("users", "userID", "==", userUID);
  const [userRetoID, setRetoID] = useState('');

  useEffect(() => {
    const auxFood: IFoods[] = [];
    const auxFoodActive: ITypefood[] = [];
    if (user?.length) {
      setRetoID(user[0].retoId);
      if (!user[0].config) {
        auxFood.push({
          content: {
            ...user[0].preferencia_alimentos,
          },
        });

        Array.from(Object.values(auxFood[0].content)).map((foods) => {
          auxFoodActive.push({
            title: foods.title,
            foods: foods.foods.filter((food) => food.status === true),
          });
        });
        auxFood[0] = {
          content: {
            ...auxFoodActive,
          },
        };
        setData(auxFood);
      }
    }
  }, [user]);

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
            onClick={() => {
              router.push(`/${action.src}`);
            }}
          />
        ))}
      </SpeedDial>
      <Navbar />
      <>
        <AlimentosPreferencias food={data ? data[0] : undefined} />
        <hr />
        <RetosComponent userRetoID={userRetoID}/>
      </>
    </BaseLayout>
  );
};

export default HomeComponent;
