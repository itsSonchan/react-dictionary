import React, { useState } from "react";
import "./Search.css";
import axios from "axios";
import Results from "./Results";

export default function Search() {
  const [word, setWord] = useState("Cat");
  const [loaded, setLoaded] = useState(false);
  const [dictionary, setDictionary] = useState(null);
  const [error, setError] = useState(false);

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
      synonyms: response.data[0].meanings[0].synonyms,
    });
  }

  function searchWord() {
    setError(false);
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(url).then(showDictionary).catch(handleError);
    function handleError(error) {
      if (error.response) {
        setError(true);
        setDictionary(null);
      }
    }
  }

  if (loaded && error === false) {
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
  } else if (error) {
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
          </form>
        </section>
        <section>
          <div className="error">
            Oops, we couldn't find the word you entered. Please try again.
          </div>
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/174/456/original/cat-6047457_1280.png?1759569337"
            alt="cat lying down"
            width={200}
          ></img>
        </section>
      </div>
    );
  } else {
    load();
  }
}
