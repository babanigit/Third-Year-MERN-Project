/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import AudioFile from "./tabla.mp3";

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
            {props.tabla ? <div>pause</div> : <div>play</div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Aplayer;
