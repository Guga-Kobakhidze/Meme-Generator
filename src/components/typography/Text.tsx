import { Typography } from "@mui/material";
import React from "react";

interface TextProps {
  content: string;
  variant: "body2" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | undefined;
}

const Text: React.FC<TextProps> = ({ content, variant }) => {
  return (
    <Typography color={"white"} variant={variant}>
      {content}
    </Typography>
  );
};

export default Text;
