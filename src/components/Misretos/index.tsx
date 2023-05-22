import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { BaseLayout } from "../PreferenciasAlimenticias/styles";
import Navbar from "@/components/NavBar";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import { decryptUID } from "@/utils/encryption/encryptions";
import { CrudService } from "@/services/crud";
import { IDiasReto } from "@/interfaces/retos/retos";
import { Typography } from "@mui/material";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#333",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Misretos() {
  const { getById } = CrudService();
  const storedEncryptedUID =
    typeof window !== "undefined" && window.localStorage.getItem("UDEN");
  let userUID = "";
  if (storedEncryptedUID !== null && storedEncryptedUID) {
    userUID = decryptUID(storedEncryptedUID);
  }
  const user: any = getById("users", "userID", "==", userUID);
  const [retos, setRetos] = React.useState<IDiasReto[]>();
  React.useEffect(() => {
    if (user) {
      const retosAux: IDiasReto[] = user[0].retos;
      setRetos(Array.from(Object.values(retosAux)));
    }
  }, [user]);
  return (
    <BaseLayout>
      <Navbar />
      <TableContainer
        component={Paper}
        sx={{
          height: "80vh",
          width: "90%",
        }}
      >
        {retos ? (
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>
                  <Typography>Tipo de reto</Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Typography>Estado</Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Typography>Dias Completados&nbsp;</Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Typography>Calificación&nbsp;</Typography>
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {retos.map((row, index) => (
                <StyledTableRow key={row.idReto + index}>
                  <StyledTableCell component="th" scope="row">
                    <Typography>{row.idReto}</Typography>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {!row.retoStatus ? (
                      <Typography color={"#009929"}>En Curso</Typography>
                    ) : (
                      <Typography color={"#e80729"}>Terminado</Typography>
                    )}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Typography>
                      {row.dias.filter((dia) => dia.statusDay === 1).length}{" "}
                      Día/s de {row.dias.length}
                    </Typography>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.dias.filter((dia) => dia.statusDay === 1).length >
                      row.dias.length / 2 && (
                      <SentimentSatisfiedAltIcon
                        color="success"
                        fontSize="large"
                      />
                    )}
                    {row.dias.filter((dia) => dia.statusDay === 1).length <
                      row.dias.length / 2 && (
                      <SentimentVeryDissatisfiedIcon
                        color="error"
                        fontSize="large"
                      />
                    )}
                    {row.dias.filter((dia) => dia.statusDay === 1).length ===
                      row.dias.length / 2 && (
                      <SentimentVeryDissatisfiedIcon
                        color="info"
                        fontSize="large"
                      />
                    )}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          "Cargando..."
        )}
      </TableContainer>
    </BaseLayout>
  );
}
