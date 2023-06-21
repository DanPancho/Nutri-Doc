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
import { ITypefood } from "@/interfaces/food/food";
import Link from "next/link";
import crypto from "crypto";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
interface IIntolerancias {
  alimentos: string[];
  sustituciones: ISustituciones[];
}
interface ISustituciones {
  Alimentointolerente: string;
  alternativa: string;
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
  userPreferences,
}: {
  dataPlatos: IPlatos | undefined;
  index: number;
  userPreferences: ITypefood[] | undefined;
}) => {
  const [expanded, setExpanded] = React.useState(false);
  const [intolerancias, setIntolerancias] = React.useState<IIntolerancias[]>();
  let aux: IIntolerancias[] = [];

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  function getRandomNumber(): number {
    const randomBytes: Buffer = crypto.randomBytes(4);
    const randomNumber: number = Math.abs(randomBytes.readInt32BE()) % 7;
    return randomNumber;
  }

  React.useEffect(() => {
    if (userPreferences && dataPlatos) {
      let alimentos: string[] = [];
      let sustituciones: ISustituciones[] = [];
      Array.from(Object.values(dataPlatos.ingredientesPlatos)).map((item) => {
        item.alimentos.map((alimento) => {
          Array.from(Object.values(userPreferences)).map((userItem) => {
            userItem.foods.map((food) => {
              if (food.name == alimento && food.status === false) {
                alimentos.push(alimento);
                let alimentosActivos = userItem.foods.filter(
                  (alimentoBuscado) => alimentoBuscado.status === true
                );
                const numeroAleatorio: number = getRandomNumber();
                sustituciones.push({
                  Alimentointolerente: alimento,
                  alternativa: alimentosActivos[numeroAleatorio].name,
                });
                aux.push({
                  alimentos: alimentos,
                  sustituciones: sustituciones,
                });
              }
            });
          });
        });
      });
      setIntolerancias(aux);
    }
    //
  }, [userPreferences, dataPlatos]);

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
        image={dataPlatos?.img}
        alt="Plato-img"
      />
      <CardActions disableSpacing>
        <IconButton aria-label="share">
          <Typography variant="body2" color="text.secondary">
            Preparación
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
              {dataPlatos?.ingredientesPlatos.map((item) => (
                <li key={item.nombrePlato}>
                  <Typography variant="body2" color="text.secondary">
                    {item.nombrePlato}
                    <Typography variant="body2" color="text.secondary">
                      {item.preparacion}
                    </Typography>
                  </Typography>
                </li>
              ))}
            </ul>
          </Typography>
          <br />
          {intolerancias?.length ? (
            <Container
              sx={{
                background: "#f4c732",
                padding: "0.3em",
                borderRadius: "10px",
              }}
            >
              <Typography variant="body2" color="text.secondary">
                Eres alérgico o itolerente a:
                <ul>
                  {intolerancias[0].alimentos.map((alimento) => (
                    <li key={alimento}>{alimento}</li>
                  ))}
                </ul>
                Te recomendamos remplazarlo:
                <ul>
                  {intolerancias[0].sustituciones.map((sustitucion) => (
                    <li key={sustitucion.alternativa}>
                      {sustitucion.Alimentointolerente} por{" "}
                      {sustitucion.alternativa}
                    </li>
                  ))}
                </ul>
                <br />
                <strong>Nota: </strong>
                <ul>
                  <li>
                    Puedes encontrar mas opciones con sus respectivas porciones
                    en:
                    <Link href={"/recomendaciones"}>
                      Recomendaciones alimenticias
                    </Link>
                  </li>
                  <li>
                    Para frutas pequeñas como uvas, frutillas, etc. Comer solo
                    10 unidades.
                  </li>
                </ul>
              </Typography>
            </Container>
          ) : (
            <></>
          )}
        </CardContent>
      </Collapse>
    </CardStyles>
  );
};

export default CardRetos;
