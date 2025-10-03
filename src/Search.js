import React, { useState } from "react";
import "./Search.css";
import axios from "axios";
import Results from "./Results";

export default function Search() {
  const [word, setWord] = useState("Cat");
  const [loaded, setLoaded] = useState(false);
  const [dictionary, setDictionary] = useState(null);

  function handleChange(event) {
    setWord(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchWord();
  }

  function load() {
    setLoaded(true);
    searchWord();
  }

  function showDictionary(response) {
    setDictionary({
      phonetics: response.data[0].phonetics,
      meanings: response.data[0].meanings,
      word: response.data[0].word,
    });
  }

  function searchWord() {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(url).then(showDictionary);
  }

  if (loaded) {
    return (
      <div>
        <section>
          <h1>What word do you want to look up?</h1>
          <form className="word-entry" onSubmit={handleSubmit}>
            <input
              type="search"
              defaultValue={word}
              autoFocus="true"
              onChange={handleChange}
            ></input>
          </form>{" "}
        </section>
        <Results data={dictionary} />
      </div>
    );
  } else {
    load();
  }
}
