// will use this for changing themes
import  { useState } from "react";
import { ThemeProvider } from "styled-components";

import Main from "./container/Main";
import { themes } from "./assets/theme";

function App() {
  const [themeMode, setThemeMode] = useState("dark");
  const [tablaMode, setTablaMode] = useState(false)
  console.log(tablaMode)

  return (
    <>
      <ThemeProvider theme={themes[themeMode]}>
        {/* <GlobalStyles/> */}
        <Main theme={themes[themeMode]} setTheme={setThemeMode} setTabla={setTablaMode} tabla={tablaMode}/>
      </ThemeProvider>
    </>
  );
}

export default App;
