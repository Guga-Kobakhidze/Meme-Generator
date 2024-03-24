import { Box } from "@mui/material";
import React from "react";
import TrollFace from "../../assets/TrollFace.svg";
import { HeaderStyles, flexBox } from "./HeaderStyle";
import { Container } from "../../pages/MainPageStyles";
import Text from "../typography/Text";

const Header: React.FC = () => {
  return (
    <Box sx={{ ...HeaderStyles }}>
      <Box sx={{ ...Container }}>
        <Box sx={{ ...flexBox }}>
          <Box gap={2} sx={{ ...flexBox }}>
            <img src={TrollFace} alt="TrollFace" />
            <Text variant="h4" content="Meme Generator" />
          </Box>
          <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
            <Text variant="h5" content="This is Meme Generator" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
