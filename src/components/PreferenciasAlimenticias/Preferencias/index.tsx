import { BottomNavigationAction, Grid } from "@mui/material";
import React, { useRef, useState } from "react";
import { ContainerPreferencias, Heading } from "../styles";
import { IFoods } from "@/interfaces/food/food";
import { Box } from "@mui/system";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
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

const AlimentosPreferencias = ({ food }: { food: IFoods | undefined }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setvalue] = useState(0);
  const router = useRouter();
  const margin = router.pathname === "/home" ? "4em" : "0";
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
          <Title>Preferencias Alimenticas</Title>
        )}
        <List style={{ flex: 1, overflowY: "scroll" }}>
          <Heading>{food?.content[value].title}</Heading>
          {food?.content[value].foods.map((item) => (
            <ListItem button key={item.name}>
              <ListItemAvatar>
                <Avatar
                  style={{ width: "3em", height: "3em", marginRight: "3rem" }}
                  src={item.imgsrc}
                />
              </ListItemAvatar>
              <ListItemText primary={item.name} secondary={item.description} />
              {router.pathname === "/preferencias-alimenticias" ? (
                <SwitchComponent />
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
                icon={<RestoreIcon />}
                onClick={() => setvalue(0)}
              />
              <BottomNavigationAction
                label="Verduras"
                icon={<FavoriteIcon />}
                onClick={() => setvalue(1)}
              />
              <BottomNavigationAction
                label="Carnes"
                icon={<ArchiveIcon />}
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
