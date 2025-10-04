import React from "react";
import "./Results.css";

export default function Synonyms(props) {
  return (
    <ul>
      {props.data.map(function (synonym, index) {
        if (index <= 6) {
          return (
            <li key={index} className="synonym">
              {synonym}
            </li>
          );
        } else {
          return null;
        }
      })}
    </ul>
  );
}
