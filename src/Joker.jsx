import { useEffect, useState } from "react";

export default function Joker() {
  let [joke, setJoke] = useState({});
  const URL = "https://official-joke-api.appspot.com/random_joke";

  const getNewJoke = async () => {
    let response = await fetch(URL);
    let jesonResponse = await response.json();
    setJoke({ setup: jesonResponse.setup, punchline: jesonResponse.punchline });
  };

  useEffect( () => {
    async function getFirstJoke() {
    let response = await fetch(URL);
    let jesonResponse = await response.json();
    console.log(jesonResponse);
    setJoke({ setup: jesonResponse.setup, punchline: jesonResponse.punchline });
  }
  getFirstJoke()
  }, []);

  return (
    <div>
      <h3>Joker</h3>
      <h2>{joke.setup}</h2>
      <h2>{joke.punchline}</h2>
      <button onClick={getNewJoke}>New Joke</button>
    </div>
  );
}
