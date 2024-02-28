/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const navigationContext = createContext();

function NavigationContextProvider({ children }) {
  const [hover, setHover] = useState(false);
  const [itemType, setItemType] = useState("");
  return (
    <navigationContext.Provider
      value={{ hover, setHover, itemType, setItemType }}
    >
      {children}
    </navigationContext.Provider>
  );
}

export default NavigationContextProvider;
