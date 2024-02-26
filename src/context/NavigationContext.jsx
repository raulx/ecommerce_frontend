/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const navigationContext = createContext();

function NavigationContextProvider({ children }) {
  const [hover, setHover] = useState(false);
  return (
    <navigationContext.Provider value={[hover, setHover]}>
      {children}
    </navigationContext.Provider>
  );
}

export default NavigationContextProvider;
