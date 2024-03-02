/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const navigationContext = createContext();

function NavigationContextProvider({ children }) {
  const [ishover, setIsHover] = useState(false);
  const [menuType, setMenuType] = useState("");
  return (
    <navigationContext.Provider
      value={{ ishover, setIsHover, menuType, setMenuType }}
    >
      {children}
    </navigationContext.Provider>
  );
}

export default NavigationContextProvider;
