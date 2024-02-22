import "./App.css";
import axios from "axios";
import { useState } from "react";
import Navbar from "./components/Navbar";

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
    <div className=" bg-neutralgray">
      <Navbar />

      <button onClick={handleClick}>connect backend.</button>
      <h1 className=" text-green-700">{backend}</h1>
    </div>
  );
}

export default App;
