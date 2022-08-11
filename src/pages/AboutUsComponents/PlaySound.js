import React, { useState } from "react";
import Sound from "react-sound";
import Music from "./Utilites/Music.mp3";
import styled from "styled-components";

const PlaySound = () => {
  const [SoundStatus, setSoundStatus] = useState(0);
  const [Condition, setCondition] = useState(true);
  const [OnOff, setOnOff] = useState("Off");

  //border: 2px solid white; for button
  const Button = styled.a`
    display: block;
    top: 14%;
    right: 2%;
    border-radius: 3px;
    padding: 0.5rem 0;
    position: absolute;
    color: gray;
    font-size: 1rem;
    z-index: 100;
    cursor: pointer;
  `;

  const handleSoundPlay = () => {
    setCondition(!Condition);
    //console.log(Condition);
    if (Condition) {
      setSoundStatus(Sound.status.PLAYING);
      setOnOff("On");
    } else {
      setSoundStatus(Sound.status.PAUSED);
      setOnOff("Off");
    }
  };

  return (
    <>
      <Button onClick={handleSoundPlay}>Sound {OnOff}</Button>
      <Sound
        url={Music}
        autoLoad="true"
        playStatus={SoundStatus}
        playFromPosition={0}
      />
    </>
  );
};

export default PlaySound;

