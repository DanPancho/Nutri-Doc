import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CardStyles } from "@/pages/reto/styles";

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

const CardRetos = () => {
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
        title="Tacos a la pastore"
        subheader="Día 1"
      />
      <CardMedia
        component="img"
        height="154"
        image="https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I="
        alt="Plato-img"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          necessitatibus aliquid nisi perspiciatis aut nemo dolore eveniet
          consequatur, odio, assumenda iste. Officiis modi quod, ipsam fugit nam
          error natus ab.
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
              <li>
                <Typography variant="body2"  color="text.secondary">1 pizca de arroz</Typography>
              </li>
              <li>
                <Typography variant="body2"  color="text.secondary">1 pizca de arroz</Typography>
              </li>
              <li>
                <Typography variant="body2"  color="text.secondary">1 pizca de arroz</Typography>
              </li>
              <li>
                <Typography variant="body2"  color="text.secondary">1 pizca de arroz</Typography>
              </li>
              <li>
                <Typography variant="body2"  color="text.secondary">1 pizca de arroz</Typography>
              </li>
            </ul>
          </Typography>
        </CardContent>
      </Collapse>
    </CardStyles>
  );
};

export default CardRetos;
