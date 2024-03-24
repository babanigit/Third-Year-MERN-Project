import React, { Component, useState } from "react";
import AudioFile from "./tabla.mp3";

// audioSong = new Audio(AudioFile);

class Aplayer extends Component {
  // const [tab,setTab] = useState(this.props.tabla);
  audioSong = new Audio(AudioFile);

  state = {
    isPlaying: this.props.tabla,
  };

  playPause = () => {
    // const myRef = useRef();

    let data = this.state.isPlaying;

    // if (data) {
    //   this.audioSong.pause();
    // } else {
    //   this.audioSong.play();
    // }

    this.setState({ isPlaying: !data });

    if (!data) {
      this.audioSong.play();
      this.props.setTabla(true)
      console.log("if clicked play")
      
    }
    else if(data){
      this.audioSong.pause();
      this.props.setTabla(false)
      console.log("else if clicked pause")
    }
    
    // this.props.setTabla(true)
  };

  render() {

   
    return (
      <>
        <div>
          <div>
            <button onClick={this.playPause}>
              {this.props.tabla ? (
                // <div className="iconify" data-icon="material-symbols:pause" />
                <div>pause</div>
              ) : (
                // <div className="iconify" data-icon="icon-park:play" />
                <div>play</div>
              )}
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Aplayer;
