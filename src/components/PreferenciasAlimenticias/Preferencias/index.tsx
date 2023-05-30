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
} from "@fortawesome/free-solid-svg-icons";

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
        {router.pathname === "/home" ? (
          <Title>Recomendaciones Alimenticas</Title>
        ) : (
          <>
            <Title>Recomendaciones Alimenticas</Title>
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
              <ListItemText
                primary={item.name}
                secondary={item.description}
              />
              {router.pathname === "/preferencias-alimenticias" ? (
                <SwitchComponent opcion={value} index={index} config={config} />
              ) : (
                <></>
              )}
            </ListItem>
          ))}
        </List>
        <Paper elevation={0} sx={{ mt: "auto" }}>
          <Grid container direction="column" alignItems="center">
            <BottomNavigation showLabels value={value}>
              <BottomNavigationAction
                label="Frutas"
                icon={<FontAwesomeIcon icon={faAppleWhole} fontSize={"2em"} />}
                onClick={() => setvalue(0)}
              />
              <BottomNavigationAction
                label="Verduras"
                icon={<FontAwesomeIcon icon={faCarrot} fontSize={"2em"} />}
                onClick={() => setvalue(1)}
              />
              <BottomNavigationAction
                label="Carnes"
                icon={
                  <FontAwesomeIcon icon={faDrumstickBite} fontSize={"2em"} />
                }
                onClick={() => setvalue(2)}
              />
            </BottomNavigation>
          </Grid>
        </Paper>
      </Box>
    </ContainerPreferencias>
  );
};

export default AlimentosPreferencias;
