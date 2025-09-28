import React, { useState } from "react";
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

const ToggleButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: "#2b6cb0",
  color: "white",
  padding: "12px",
  width: "200px",
  fontWeight: "bold",
}));

const InstaButtons = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <Grid container direction="column" spacing={2} alignItems="center">
      <Grid item>
        <StyledButton
          variant="outlined"
          onClick={() => window.open("https://prpg.unicamp.br/wp-content/uploads/sites/10/2025/01/livro-diretrizes-ia-1.pdf", "_blank")}
        >
          LIVRO: DIRETRIZES PARA O USO ÉTICO E RESPONSÁVEL DA INTELIGÊNCIA ARTIFICIAL GENERATIVA
        </StyledButton>
      </Grid>

      <Grid item>
        <StyledButton variant="outlined" onClick={() => window.open('#', '_blank')}>
          EMERGE AMAZÔNIA
        </StyledButton>
      </Grid>

      <Grid item>
        <StyledButton variant="outlined" onClick={() => window.open('#', '_blank')}>
          INOVA AMAZÔNIA
        </StyledButton>
      </Grid>

      <Grid item>
        <StyledButton variant="outlined" onClick={() => window.open('#', '_blank')}>
          CASARÃO DA INOVAÇÃO CASSINA
        </StyledButton>
      </Grid>

      <Grid item>
        <StyledButton variant="outlined" onClick={() => window.open('#', '_blank')}>
          AMAZÔNIA LEGAL EM DADOS
        </StyledButton>
      </Grid>

      <Grid item>
        <StyledButton variant="outlined" onClick={() => window.open('#', '_blank')}>
          IOT SOLUTIONS WORLD CONGRESS (MAI/21)
        </StyledButton>
      </Grid>

      <Grid item>
        <StyledButton variant="outlined" onClick={() => window.open('#', '_blank')}>
          WRANGLE SUMMIT (ABR/21)
        </StyledButton>
      </Grid>

      <Grid item>
        <StyledButton variant="outlined" onClick={() => window.open('#', '_blank')}>
          IOTDAY
        </StyledButton>
      </Grid>

      <Grid item>
        <StyledButton variant="outlined" onClick={() => window.open('#', '_blank')}>
          LIVROS GRÁTIS DE DATA
        </StyledButton>
      </Grid>

      <Grid item>
        {/* Toggle to show more links inline instead of opening a new tab */}
        <ToggleButton
          variant="outlined"
          onClick={() => setShowMore((s) => !s)}
        >
          {showMore ? "MENOS LINKS" : "MAIS LINKS"}
        </ToggleButton>
      </Grid>

      {showMore && (
        <>
          <Grid item>
            <StyledButton variant="outlined" onClick={() => window.open('#', '_blank')}>
              LIVROS GRÁTIS DE DATA SCIENCE NA DSC
            </StyledButton>
          </Grid>

          <Grid item>
            <StyledButton variant="outlined" onClick={() => window.open('#', '_blank')}>
              SOLUÇÃO FIM-A-FIM COM PYSPARK E DRACO (MAR/21)
            </StyledButton>
          </Grid>

          <Grid item>
            <StyledButton variant="outlined" onClick={() => window.open('#', '_blank')}>
              MBA EM IOT - USP
            </StyledButton>
          </Grid>

          <Grid item>
            <StyledButton variant="outlined" onClick={() => window.open('#', '_blank')}>
              AGRICULTURA A A Z - BOREM
            </StyledButton>
          </Grid>

          <Grid item>
            <StyledButton variant="outlined" onClick={() => window.open('#', '_blank')}>
              IOT DAYSLAM (ABR/2021)
            </StyledButton>
          </Grid>

          <Grid item>
            <StyledButton variant="outlined" onClick={() => window.open('#', '_blank')}>
              RESTFUL APIS PARA IOT
            </StyledButton>
          </Grid>

          <Grid item>
            <StyledButton variant="outlined" onClick={() => window.open('#', '_blank')}>
              FOOD AND AGRIBUSINESS IN 2030
            </StyledButton>
          </Grid>

          <Grid item>
            <StyledButton variant="outlined" onClick={() => window.open('#', '_blank')}>
              IOT ONLINE CONFERENCE (DEZ/2020)
            </StyledButton>
          </Grid>

          <Grid item>
            <StyledButton variant="outlined" onClick={() => window.open('#', '_blank')}>
              PLATAFORMA DE APIS DA EMBRAPA
            </StyledButton>
          </Grid>

          <Grid item>
            <StyledButton variant="outlined" onClick={() => window.open('#', '_blank')}>
              CANAL DO AGROLAB AMAZÔNIA
            </StyledButton>
          </Grid>

          <Grid item>
            <StyledButton variant="outlined" onClick={() => window.open('#', '_blank')}>
              AGROLAB AMAZÔNIA (SET/2020)
            </StyledButton>
          </Grid>

          <Grid item>
            <StyledButton variant="outlined" onClick={() => window.open('#', '_blank')}>
              WEBINAR AGRICULTURA DIGITAL (AGO/2020)
            </StyledButton>
          </Grid>

          <Grid item>
            <StyledButton variant="outlined" onClick={() => window.open('#', '_blank')}>
              LIVRO - IOT SOLUTIONS FOR DUMMIES
            </StyledButton>
          </Grid>

          <Grid item>
            <StyledButton variant="outlined" onClick={() => window.open('#', '_blank')}>
              RECOMENDAÇÕES NO DESENVOLVIMENTO DE IOT
            </StyledButton>
          </Grid>

          <Grid item>
            <StyledButton variant="outlined" onClick={() => window.open('#', '_blank')}>
              SIGA-ME NO TWITTER
            </StyledButton>
          </Grid>
        </>
      )}

    </Grid>
  );
};

export default InstaButtons;
