import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.data) {
    return (
      <div>
        <h2 className="text-capitalize">{props.data.word}</h2>
        <em className="phonetic">{props.data.phonetic}</em>
        <audio controls>
          <source src={props.data.audio} type="audio/mp3"></source>
        </audio>{" "}
        <br></br>
        {props.data.meanings.map(function (meaning, index) {
          return (
            <div key={index} className="results">
              <Meaning data={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
