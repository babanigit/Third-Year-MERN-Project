// will use this for changing themes
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import Main from "./container/Main";
import { themes } from "./theme";

function App() {
  const [themeMode, setThemeMode] = useState("dark");

  return (
    <>
      <ThemeProvider theme={themes[themeMode]}>
        {/* <GlobalStyles/> */}
        <Main theme={themes[themeMode]} setTheme={setThemeMode} />
      </ThemeProvider>
    </>
  );
}

export default App;
