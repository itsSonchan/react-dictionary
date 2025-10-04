import React from "react";
import Audio from "./Audio";

export default function Phonetics(props) {
  return props.data.map(function (phonetic, index) {
    return (
      <div key={index} className="phonetic">
        <span className="text">{phonetic.text}</span>
        <Audio data={phonetic.audio} />
      </div>
    );
  });
}
