import * as React from "react";
import { styled } from "@mui/material/styles";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CardStyles } from "../reto/styles";
import { IPlatos } from "@/interfaces/retos/retos";
import { Container } from "@mui/system";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const CardRetos = ({
  dataPlatos,
  index,
}: {
  dataPlatos: IPlatos | undefined;
  index: number;
}) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <CardStyles>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            ND
          </Avatar>
        }
        title={dataPlatos?.name}
        subheader={`Día ${index + 1}`}
      />
      <CardMedia
        component="img"
        height="154"
        image="https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I="
        alt="Plato-img"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {dataPlatos?.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="share">
          <Typography variant="body2" color="text.secondary">
            Ingredientes
          </Typography>
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>
            <ul>
              {dataPlatos?.ingredientes.map((item) => (
                <li key={item.tipo}>
                  <Typography variant="body2" color="text.secondary">
                    {item.tipo}
                    <Typography variant="body2" color="text.secondary">
                      {item.cantidad}
                    </Typography>
                  </Typography>
                </li>
              ))}
            </ul>
          </Typography>
          <br />
          <Container sx={{background: "#f4c732", padding: "0.3em", borderRadius: '10px'}}>
            <Typography variant="body2" color="text.secondary">
              <strong>Importante: </strong> Si eres alérgico o intolerante a alguno de estos alimentos, puedes buscar una alternativa en las recomendaciones alimenticias.
            </Typography>
          </Container>
        </CardContent>
      </Collapse>
    </CardStyles>
  );
};

export default CardRetos;
