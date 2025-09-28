import React from "react";
import { Grid, Button } from "@mui/material";
import { styled } from "@mui/system";

// Define the custom styled components
const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: "#3d3b3c",
  color: "white",
  padding: "15px",
  width: "250px",
  fontWeight: "bold",
}));

const InstaButtons = () => {
  return (
    <Grid container direction="column" spacing={2} alignItems="center">
      <Grid item>
        <StyledButton
          variant="outlined"
          onClick={() => window.open("https://prpg.unicamp.br/wp-content/uploads/sites/10/2025/01/livro-diretrizes-ia-1.pdf", "_blank")}
        >
          Livro: Diretrizes para o uso ético e responsável da Inteligência Artificial Generativa
        </StyledButton>
      </Grid>

      {/* ... restante do conteúdo permanece igual para brevidade (copiar/colar do arquivo original) */}

    </Grid>
  );
};

export default InstaButtons;
