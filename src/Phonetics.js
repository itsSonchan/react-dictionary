import React from "react";
import Audio from "./Audio";

export default function Phonetics(props) {
  props.data.map(function (phonetic, index) {
    return (
      <div key={index} className="phonetic">
        {phonetic.text}
        <Audio data={phonetic.audio} />
      </div>
    );
  });
}
