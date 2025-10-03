import React, { useRef, useEffect } from "react";
import "./Results.css";

export default function Audio(props) {
  const audioRef = useRef(null);
  useEffect(() => {
    if (props.data && audioRef.current) {
      audioRef.current.load();
    }
  }, [props.data]);
  function handlePlay() {
    audioRef.current.play();
  }
  if (!props.data) {
    return null;
  }
  return (
    <div className="audio">
      <audio ref={audioRef}>
        <source src={props.data} type="audio/mp3"></source>
      </audio>
      <button onClick={handlePlay}>Listen</button>
    </div>
  );
}
