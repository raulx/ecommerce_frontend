import "./App.css";
import axios from "axios";
import { useState } from "react";

// "https://rich-pear-coyote-wig.cyclic.app/"
// "http://localhost:3300"
function App() {
  const [backend, setbackend] = useState("");
  const handleClick = async () => {
    try {
      const res = await axios.get("https://rich-pear-coyote-wig.cyclic.app/");
      setbackend(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div>Hello world..</div>
      <button onClick={handleClick}>connect backend.</button>
      <h1>{backend}</h1>
    </>
  );
}

export default App;
