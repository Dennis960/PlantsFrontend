import "./App.css";
import Plants from "./components/Plants";
import SinglePlant from "./components/SinglePlant";

import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlantStatsCard from "./components/PlantStatsCard";
import { createTheme, ThemeProvider } from "@mui/material";
import { amber, blue, red, yellow } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: amber,
    secondary: blue,
    sun: { main: yellow[500] },
    water: { main: blue[500] },
    power: { main: red[500] },
  },
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <BrowserRouter basename="plants">
            <Routes>
              <Route index element={<Plants />}></Route>
              <Route path="/:plantId" element={<SinglePlant />} />
              <Route
                path="/testPlants"
                element={<PlantStatsCard value={30} color="water" size={150} />}
              />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
