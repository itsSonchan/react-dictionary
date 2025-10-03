import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="meaning">
      <strong>{props.data.partOfSpeech}</strong>
      {props.data.definitions.map(function (definition, index) {
        if (index === 0) {
          return (
            <div key={index}>
              <p>{definition.definition}</p>
              <em>{definition.example}</em>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
