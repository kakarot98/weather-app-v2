import "./App.css";
import Weather from "./components/Weather";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  const [showCustomLocation, setShowCustomLocation] = useState(false);

  const showForm = (e) => {
    setShowCustomLocation(!showCustomLocation);
    console.log(showCustomLocation);
  };

  return (
    <div className="App">
      <Weather />
      <button className="button" onClick={() => showForm()}>
        Check weather conditions of a location
      </button>
      {showCustomLocation && <Form />}
    </div>
  );
}

export default App;
