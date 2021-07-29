import React, { Component } from "react";
import SpotifyButton from "../Individual/SpotifyButton";
import AudioPlayer from "material-ui-audio-player";


class Tracks extends Component {
  render() {
    return (
      <div>
        {this.props.tracks.map((track) => {
          return (
            <div>
              <p>
                <b>
                  {track.artists[0].name} - {track.name}
                </b>
              </p>
              <p>
                {track.preview_url ? (
                  <div>
                    <AudioPlayer
                      download={false}
                      volume={true}
                      width="auto"
                      hieght="58px"
                      variation="default"
                      autoplay={false}
                      preload="auto"
                      loop={false}
                      src={track.preview_url}
                    />
                  </div>
                ) : (
                  <>Preview not available</>
                )}
              </p>

              <p>
                <span>
                  Listen on
                  <a href={track.external_urls.spotify} target="_blank">
                    {" "}
                    <SpotifyButton />
                  </a>
                </span>
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Tracks;
