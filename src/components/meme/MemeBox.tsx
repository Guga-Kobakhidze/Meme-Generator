import React, { FormEvent, useState } from "react";
import Meme from "./Meme";
import memeData from "../../data/MemeData";
import { Box } from "@mui/system";
import { MemeBoxStyle } from "./MemeStyle";

interface MemeProps {
  topText: string;
  bottomText: string;
  imageUrl: string;
}

interface MemeDataProps {
  id: string;
  name: string;
  url: string;
  width: number;
  height: number;
  box_count: number;
}

const MemeBox = () => {
  const [allMemes] = useState<MemeDataProps[]>(memeData);
  const [meme, setMeme] = useState<MemeProps>({
    topText: "",
    bottomText: "",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });

  console.log(meme);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const memeArr = allMemes;
    const randomNumber = Math.floor(Math.random() * memeArr.length);
    const url = memeArr[randomNumber].url;

    setMeme((prev) => ({
      ...prev,
      imageUrl: url,
    }));
  };

  return (
    <Box sx={{ ...MemeBoxStyle }}>
      <Meme onFormSubmit={onSubmit} />
      <Box mt={2} sx={{ img: { width: "100%", borderRadius: 2 } }}>
        <img src={meme.imageUrl} alt="MemeImg" />
      </Box>
    </Box>
  );
};

export default MemeBox;
