import React, { FormEvent } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Button, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { BackgroundColor } from "../header/HeaderStyle";

const Meme: React.FC<{ onFormSubmit: (e: FormEvent) => void }> = ({
  onFormSubmit,
}) => {
  return (
    <Box mt={5}>
      <Box width={"100%"}>
        <Box component={"form"} onSubmit={onFormSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField fullWidth label="Top Text" />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="Bottom Text" />
            </Grid>
            <Grid item xs={12}>
              <Button
                sx={{ ...BackgroundColor, fontWeight: "bold" }}
                fullWidth
                type="submit"
                variant="contained"
              >
                Get a new meme image
                <Box ml={1} mt={0.8}>
                  <AddBoxIcon />
                </Box>
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Meme;
