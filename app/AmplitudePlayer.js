"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import amplitude from "amplitudejs";

const AmplitudePlayer = () => {
  useEffect(() => {
    amplitude.init({
      songs: [
        {
          name: "Offcut #6",
          artist: "Little People",
          album: "We Are But Hunks of Wood Remixes",
          url: "https://521dimensions.com/song/Offcut6-LittlePeople.mp3",
          cover_art_url:
            "https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-but-hunks-of-wood.jpg",
        },
      ],
      waveforms: {
        sample_rate: 50,
      },
    });
  });

  return (
    <div id="amplitude-player">
      <div id="amplitude-left">
        <Image
          src={""}
          alt={"audio.name"}
          width={1200}
          height={630}
          data-amplitude-song-info="cover_art_url"
          className="album-art"
        />
        <div className="amplitude-visualization" id="large-visualization"></div>
        <div id="player-left-bottom">
        <div>
        <Image src={"/image.svg"} width={154} height={129} alt="album art"/>
        </div>
          
         <div className="iconsstyle">
           <div id="control-container">
            <div id="repeat-container">
              <div className="amplitude-repeat" id="repeat"></div>
              <div
                className="amplitude-shuffle amplitude-shuffle-off"
                id="shuffle"
              ></div>
            </div>
            <div id="central-control-container">
              <div id="central-controls">
                <div className="amplitude-prev" id="previous"></div>
                <div className="amplitude-play-pause" id="play-pause"></div>
                <div className="amplitude-next" id="next"></div>
              </div>
            </div>
            <div id="volume-container">
              <div className="volume-controls">
                <div className="amplitude-mute amplitude-not-muted"></div>
                <input type="range" className="amplitude-volume-slider" />
                <div className="ms-range-fix"></div>
              </div>
              <div
                className="amplitude-shuffle amplitude-shuffle-off"
                id="shuffle-right"
              ></div>
            </div>
          </div>
         <div id="time-container">
            {/* <span className="current-time">
              <span className="amplitude-current-minutes"></span>:
              <span className="amplitude-current-seconds"></span>
            </span> */}
            <div id="progress-container">
              <div className="amplitude-wave-form"></div>
              <input type="range" className="amplitude-song-slider" />
              <progress
                id="song-played-progress"
                className="amplitude-song-played-progress"
              ></progress>
              <progress
                id="song-buffered-progress"
                className="amplitude-buffered-progress"
                value="0"
              ></progress>
            </div>
            {/* <span className="duration">
              <span className="amplitude-duration-minutes"></span>:
              <span className="amplitude-duration-seconds"></span>
            </span> */}
          </div> 
         </div>
          {/* <div id="meta-container">
            <span data-amplitude-song-info="name" className="song-name"></span>
            <div className="song-artist-album">
              <span data-amplitude-song-info="artist"></span>
              <span data-amplitude-song-info="album"></span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AmplitudePlayer;
