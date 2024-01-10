

import React, { useState } from "react";

import AudioFile from "./fls1.mp3";

const Aplayer2  = () => {

      const audioSong = new Audio(AudioFile);

      const state = {
        isPlaying: false,
      };

      const playPause = () => {
        let data = this.state.isPlaying;

        if (data) {
          this.audioSong.pause();
        } else {
          this.audioSong.play();
        }

        this.setState({ isPlaying: !data });
      };
  return (
    <div>
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
    </div>
  );
}

export default Aplayer2
