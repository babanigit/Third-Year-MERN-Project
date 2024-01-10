import React, { Component } from "react";

import AudioFile from "./tabla.mp3";




class Aplayer extends Component {
  audioSong = new Audio(AudioFile);

  state = {
    isPlaying: false,
  };

  playPause = () => {
    let data = this.state.isPlaying;

    if (data) {
      this.audioSong.pause();
    } else {
      this.audioSong.play();
    }

    this.setState({ isPlaying: !data });
  };

  render() {
    return (
      <>
        <div>
          <div>
            <button onClick={this.playPause}>
              {this.state.isPlaying ? (
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
