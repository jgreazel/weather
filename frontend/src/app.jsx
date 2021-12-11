import { useEffect } from "preact/hooks";
import { Logo } from "./logo";

export function App(props) {
  // getting weather data for omaha
  useEffect(() => {
    fetch("http://localhost:8080/weather/omaha", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      {/* <Logo />
      <p>Hello Vite + Preact!</p>
      <p>
        <a
          class="link"
          href="https://preactjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Preact
        </a>
      </p> */}
      hi
    </>
  );
}
