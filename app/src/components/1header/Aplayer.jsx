/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import AudioFile from "./tabla.mp3";

import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";



const Aplayer = (props) => {
  const audioSong = useRef(new Audio(AudioFile));

  const [isPlaying, setIsPlaying] = useState(props.tabla);

  const playPause = () => {
    let data = isPlaying;

    setIsPlaying(!data);

    if (!data) {
      audioSong.current.play();
      props.setTabla(true);
      console.log("if clicked play");
    } else {
      audioSong.current.pause();
      props.setTabla(false);
      console.log("else if clicked pause");
    }
  };

  return (
    <>
      <div>
        <div>
          <div style={{ color: props.theme.text }} onClick={playPause}>
            {props.tabla ? <div><FaPause /></div> : <div><FaPlay /></div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Aplayer;
