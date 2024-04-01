// will use this for changing themes
import { useState, createContext, useContext } from "react";
import { ThemeProvider } from "styled-components";

import Main from "./container/Main";
import { themes } from "./assets/theme";

export const MyContext = createContext(() => {});

function App() {
  const [themeMode, setThemeMode] = useState("dark");
  const [tablaMode, setTablaMode] = useState(false);
  console.log(tablaMode);

  return (
    <>
      <ThemeProvider theme={themes[themeMode]}>
        <MyContext.Provider value={{setThemeMode,setTablaMode,tablaMode,themeMode}}>
          <Main
            theme={themes[themeMode]}
          />
        </MyContext.Provider>
      </ThemeProvider>
    </>
  );
}

// creating useMyContext fun
function useMyContext() {
  return useContext(MyContext)
}

export default App;
export {useMyContext}
