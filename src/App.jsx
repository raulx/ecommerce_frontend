import "./App.css";
import axios from "axios";
import { useState } from "react";
import Navbar from "./components/Navbar";
import UseNavigationContext from "./hooks/useNavigationContext";

// "https://rich-pear-coyote-wig.cyclic.app/"
// "http://localhost:3300"
function App() {
  const [backend, setbackend] = useState("");
  const [hover] = UseNavigationContext();
  const handleClick = async () => {
    try {
      const res = await axios.get("https://rich-pear-coyote-wig.cyclic.app/");
      setbackend(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className=" bg-neutralgray relative">
      <Navbar />
      {hover ? (
        <div className="w-screen h-screen transition-all duration-200 bg-black fixed mt-20 opacity-45"></div>
      ) : null}

      <div className="pt-20">
        <button onClick={handleClick}>connect backend.</button>
        <h1 className=" text-green-700 ">{backend}</h1>
        <div className="w-full h-48 bg-red-200 border-2" />
        <div className="w-full h-48 bg-fuchsia-200 border-2" />
        <div className="w-full h-48 bg-green-200 border-2" />
        <div className="w-full h-48 bg-orange-200 border-2" />
        <div className="w-full h-48 bg-purple-200 border-2" />
        <div className="w-full h-48 bg-violet-200 border-2" />
      </div>
    </div>
  );
}

export default App;
