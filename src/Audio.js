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
      <img
        src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/174/453/original/output-onlinepngtools.png?1759566125"
        alt="listen-icon"
        width="20px"
        onClick={handlePlay}
      ></img>
    </div>
  );
}
