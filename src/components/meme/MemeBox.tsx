import React, { FormEvent, useState } from "react";
import Meme from "./Meme";
import memeData from "../../data/MemeData";
import { Box } from "@mui/system";
import { MemeBoxStyle } from "./MemeStyle";

const MemeBox = () => {
  const [memeImg, setMemeImg] = useState<string>("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const memeArr = memeData;
    const randomNumber = Math.floor(Math.random() * memeArr.length);
    const url = memeArr[randomNumber].url;

    setMemeImg(url);
  };

  console.log(memeImg);

  return (
    <Box sx={{ ...MemeBoxStyle }}>
      <Meme onFormSubmit={onSubmit} />
      <Box mt={2} sx={{ img: { width: "100%", borderRadius: 2 } }}>
        {memeImg && <img src={memeImg} alt="MemeImg" />}
      </Box>
    </Box>
  );
};

export default MemeBox;
