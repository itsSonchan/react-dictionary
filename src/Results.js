import React from "react";
import "./Results.css";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import Synonyms from "./Synonyms";

export default function Results(props) {
  console.log(props.data);
  if (props.data) {
    return (
      <div>
        <section className="text-start ">
          <h2 className="text-capitalize">{props.data.word}</h2>
          <Phonetics data={props.data.phonetics} />
          {props.data.meanings.map(function (meaning, index) {
            return (
              <div key={index} className="results">
                <Meaning data={meaning} />
              </div>
            );
          })}{" "}
          <Synonyms data={props.data.synonyms} />
        </section>
      </div>
    );
  } else {
    return null;
  }
}
