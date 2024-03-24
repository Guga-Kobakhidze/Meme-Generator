import { SxProps } from "@mui/system";

export const HeaderStyles: SxProps = {
  padding: "20px 0",
  background: "linear-gradient(to right, #672280, #A626D3)",
  backgroundImage: "linear-gradient(to right, #672280, #A626D3)",
  "@supports (-webkit-background-clip: text)": {
    backgroundImage: "-webkit-linear-gradient(left, #672280, #A626D3)",
  },
  "@supports (-moz-appearance:none)": {
    backgroundImage: "-moz-linear-gradient(left, #672280, #A626D3)",
  },
  "@supports (-o-background-size:auto)": {
    backgroundImage: "-o-linear-gradient(left, #672280, #A626D3)",
  },

  img: {
    width: 80,
    height: 80,
  },
};

export const flexBox: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};
