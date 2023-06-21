import {
  BottomNavigationAction,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { ContainerPreferencias, Heading } from "../styles";
import { IFoods, ITypefood } from "@/interfaces/food/food";
import { Box } from "@mui/system";
import BottomNavigation from "@mui/material/BottomNavigation";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import { useRouter } from "next/router";
import { Title } from "@/components/ListItem/styles";
import SwitchComponent from "@/components/Switch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAppleWhole,
  faDrumstickBite,
  faCarrot,
  faCow,
  faBreadSlice,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const AlimentosPreferencias = ({
  food,
  config,
}: {
  food: IFoods | undefined;
  config?: ITypefood[];
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setvalue] = useState(0);
  const router = useRouter();
  const margin = router.pathname === "/sugerencias" ? "4em" : "0";
  return (
    <ContainerPreferencias margin={margin}>
      <Box
        sx={{
          height: "75vh",
          width: "90%",
          display: "flex",
          flexDirection: "column",
        }}
        ref={ref}
      >
        {router.pathname === "/recomendaciones" ? (
          <Title>Recomendaciones Alimenticas</Title>
        ) : (
          <>
            <Title>Configuración de recomendaciones alimenticas</Title>
            <Container
              sx={{
                background: "#f4c732",
                padding: "0.5em",
                borderRadius: "10px",
                marginBottom: "0.5em",
              }}
            >
              <Typography>
                <strong>Nota: </strong> recuerda solo desactivar los alimentos a
                los que seas alérgico o tengas intolerancia.
              </Typography>
            </Container>
          </>
        )}
        <List style={{ flex: 1, overflowY: "scroll" }}>
          <Heading>{food?.content[value].title}</Heading>
          {food?.content[value].foods.map((item, index) => (
            <ListItem button key={item.name}>
              <ListItemAvatar>
                <Avatar
                  style={{ width: "3em", height: "3em", marginRight: "3rem" }}
                  src={item.imgsrc}
                />
              </ListItemAvatar>
              {router.pathname !== "/preferencias-alimenticias" ? (
                <ListItemText
                  primary={item.name}
                  secondary={item.recomendacion}
                />
              ) : (
                <>
                  <ListItemText
                    primary={item.name}
                    secondary={item.description}
                  />
                  <SwitchComponent
                    opcion={value}
                    index={index}
                    config={config}
                  />
                </>
              )}
            </ListItem>
          ))}
        </List>
        <Paper elevation={0} sx={{ mt: "auto" }}>
          <Grid container direction="column" alignItems="center">
            <BottomNavigation showLabels value={value}>
              <BottomNavigationAction
                label="Frutas"
                icon={
                  <Image
                    src={"/alimentos/apple.png"}
                    width={30}
                    height={30}
                    alt="img-apple"
                  />
                }
                onClick={() => setvalue(0)}
              />
              <BottomNavigationAction
                label="Verduras"
                icon={
                  <Image
                    src={"/alimentos/zanahoria.png"}
                    width={30}
                    height={30}
                    alt="img-verduras"
                  />
                }
                onClick={() => setvalue(1)}
              />
              <BottomNavigationAction
                label="Proteínas"
                icon={
                  <Image
                    src={"/alimentos/carne.png"}
                    width={30}
                    height={30}
                    alt="img-proteinas"
                  />
                }
                onClick={() => setvalue(2)}
              />

              <BottomNavigationAction
                label="Lácteos"
                icon={
                  <Image
                    src={"/alimentos/leche.png"}
                    width={30}
                    height={30}
                    alt="img-lacteos"
                  />
                }
                onClick={() => setvalue(3)}
              />
              <BottomNavigationAction
                label="Panes y Cereales"
                icon={
                  <Image
                    src={"/alimentos/pan.png"}
                    width={30}
                    height={30}
                    alt="img-apple"
                  />
                }
                onClick={() => setvalue(4)}
              />
              <BottomNavigationAction
                label="Tubérculos"
                icon={
                  <Image
                    src={"/alimentos/potato.png"}
                    width={30}
                    height={30}
                    alt="img-apple"
                  />
                }
                onClick={() => setvalue(5)}
              />
              <BottomNavigationAction
                label="Leguminosas"
                icon={
                  <Image
                    src={"/alimentos/bean.png"}
                    width={30}
                    height={30}
                    alt="img-apple"
                  />
                }
                onClick={() => setvalue(6)}
              />
              <BottomNavigationAction
                label="Grasas"
                icon={
                  <Image
                    src={"/alimentos/aguacate.png"}
                    width={30}
                    height={30}
                    alt="img-apple"
                  />
                }
                onClick={() => setvalue(7)}
              />
            </BottomNavigation>
          </Grid>
        </Paper>
      </Box>
    </ContainerPreferencias>
  );
};

export default AlimentosPreferencias;
