import React from "react";
import "./Results.css";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Results(props) {
  if (props.data) {
    return (
      <div>
        <section className="text-start ">
          <div className="word-section">
            <h2 className="text-capitalize">{props.data.word}</h2>
            <Phonetics data={props.data.phonetics} />
          </div>
          {props.data.meanings.map(function (meaning, index) {
            return (
              <div key={index} className="results">
                <Meaning data={meaning} />
              </div>
            );
          })}
        </section>
      </div>
    );
  } else {
    return null;
  }
}
