import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Search() {
  const [word, setWord] = useState(null);
  const [dictionary, setDictionary] = useState(null);
  function handleChange(event) {
    setWord(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    function showDictionary(response) {
      setDictionary({
        phonetic: response.data[0].phonetic,
        meanings: response.data[0].meanings,
        audio: response.data[0].phonetics[0].audio,
        word: response.data[0].word,
      });
      console.log(response.data);
    }
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(url).then(showDictionary);
  }
  return (
    <div>
      <form className="word-entry" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a word..."
          autoFocus="true"
          onChange={handleChange}
        ></input>
        <input type="submit"></input>
      </form>
      <Results data={dictionary} />
    </div>
  );
}
