import React, { useEffect, useState } from "react";
import { BaseLayout } from "./styles";
import UserData from "./UserData";
import { IFoods, ITypefood } from "@/interfaces/food/food";
import AlimentosPreferencias from "./Preferencias";
import { CrudService } from "@/services/crud";
import Navbar from "@/components/NavBar";
import { decryptUID } from "@/utils/encryption/encryptions";


const Preferencias: React.FC = () => {
  const { getAll, getById } = CrudService();
  const [data, setData] = useState<IFoods[]>();
  const storedEncryptedUID =
    typeof window !== "undefined" && window.localStorage.getItem("UDEN");
  let userUID = "";
  if (storedEncryptedUID !== null && storedEncryptedUID) {
    userUID = decryptUID(storedEncryptedUID);
  }
  const user: any = getById("users", "userID", "==", userUID);

  useEffect(() => {
    const fetchData = async () => {
      const aux: IFoods[] = [];
      if (user?.length) {
        if (!user[0].config) {
          aux.push({
            content: {
              ...user[0].preferencia_alimentos,
            },
          });
          setData(aux);
        } else {
          const food = await getAll("alimentos");
          const alimentosAux: ITypefood[] = [];
          if (food) {
            food.map((foodItem) => {
              foodItem.content.map((item) => {
                const foodsArray: any[] = [];
                item.foods.map((foodItem) => {
                  foodsArray.push({
                    ...foodItem,
                    status: true,
                  });
                });
                alimentosAux.push({
                  title: item.title,
                  foods: foodsArray,
                });
              });
            });
            aux.push({
              content: {
                ...alimentosAux,
              },
            });
            setData(aux);
          }
        }
      }
    };
    fetchData();
  }, [user]);

  return (
    <BaseLayout>
      {user?.length && !user[0].config ? <Navbar /> : <></>}
      <UserData uid={userUID} config={data ? data[0].content : undefined} />
      <AlimentosPreferencias
        food={data !== undefined ? data[0] : undefined}
        config={data ? data[0].content : undefined}
      />
    </BaseLayout>
  );
};

export default Preferencias;
