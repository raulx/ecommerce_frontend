import "./App.css";
import axios from "axios";
import { useState } from "react";
import Navbar from "./components/Navbar";
import UseNavigationContext from "./hooks/useNavigationContext";
import NavigationMenu from "./components/NavigationMenus/NavigationMenu";

// "https://rich-pear-coyote-wig.cyclic.app/"
// "http://localhost:3300"
function App() {
  const [backend, setbackend] = useState("");
  const { ishover, menuType } = UseNavigationContext();

  const handleClick = async () => {
    try {
      const res = await axios.get("https://rich-pear-coyote-wig.cyclic.app/");
      setbackend(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="bg-neutralgray relative">
      <header>
        {/* note:ishover and menutype states are toggled inside navbar component*/}
        <Navbar />
        {ishover ? <NavigationMenu menuCategory={menuType} /> : null}
      </header>
      <main>
        <div className="pt-20">
          <button onClick={handleClick}>connect backend.</button>
          <h1 className="text-green-700">{backend}</h1>
          <div className="w-full h-48 bg-red-200 border-2" />
          <div className="w-full h-48 bg-fuchsia-200 border-2" />
          <div className="w-full h-48 bg-green-200 border-2" />
          <div className="w-full h-48 bg-orange-200 border-2" />
          <div className="w-full h-48 bg-purple-200 border-2" />
          <div className="w-full h-48 bg-violet-200 border-2" />
        </div>
      </main>
    </div>
  );
}

export default App;
