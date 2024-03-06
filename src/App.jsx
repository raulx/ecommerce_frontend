import "./App.css";
import axios from "axios";
import { useState } from "react";
import Navbar from "./components/Navbar";
import UseNavigationContext from "./hooks/useNavigationContext";
import DesktopNavigationMenu from "./components/NavigationMenus/DesktopNavigationMenu";
import PhoneNavigationMenu from "./components/NavigationMenus/PhoneNavigationMenu";

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
        {/* note:DesktopNavigationMenu and PhoneNavigationMenu are separate navigation 
        menus for desktop and phone screens any change in one menu must be implemented
         on the other.  */}
        {ishover && <DesktopNavigationMenu menuCategory={menuType} />}
        <PhoneNavigationMenu />
      </header>
      <main>
        <div className="md:pt-20 pt-16">
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
