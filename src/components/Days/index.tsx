import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { IDiaReto, IDiasReto } from "@/interfaces/retos/retos";

interface Props {
  window?: () => Window;
}

const drawerWidth = 440;

export default function Days(
  {
    mobileOpen,
    setMobileOpen,
    retos,
    setRetoActivoUser,
    setIndex,
  }: {
    mobileOpen: boolean;
    setMobileOpen: React.Dispatch<React.SetStateAction<any>>;
    retos: IDiasReto[];
    setRetoActivoUser: React.Dispatch<
      React.SetStateAction<IDiaReto | undefined>
    >;
    setIndex: React.Dispatch<React.SetStateAction<any>>;
  },
  props: Props
) {
  const { window } = props;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //const [indexActive, setActive] = React.useState<number>();
  const [retoActivo, setRetoActivo] = React.useState<IDiasReto | undefined>();
  React.useEffect(() => {
    if (retos) {
      const retoactivo = retos.find((reto) => reto.retoStatus === 0);
      const indexRetoActivo = retos.findIndex((reto) => reto.retoStatus === 0);
      setRetoActivo(retoactivo);
      //setActive(indexRetoActivo);
    }
  }, [retos]);

  const handleRetoNav = (index: number) => {
    setIndex(index);
    setRetoActivoUser(retoActivo?.dias[index]);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Días
      </Typography>
      <Divider />
      <List>
        {retos && retoActivo && (
          <>
            {retoActivo.dias.map((_, index) => (
              <ListItem key={index} disablePadding>
                {retoActivo.dias.findIndex(
                  (actual) => actual.statusDay === 0
                ) === index ? (
                  <ListItemButton
                    sx={{
                      textAlign: "center",
                      border: "1px solid #4CAF50",
                      borderRadius: "15px",
                    }}
                    onClick={() => handleRetoNav(index)}
                  >
                    <ListItemText primary={`Día ${index + 1} (Actual)`} />
                  </ListItemButton>
                ) : (
                  <ListItemButton
                    sx={{ textAlign: "center" }}
                    onClick={() => handleRetoNav(index)}
                  >
                    <ListItemText primary={`Día ${index + 1}`} />
                  </ListItemButton>
                )}
              </ListItem>
            ))}
          </>
        )}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
