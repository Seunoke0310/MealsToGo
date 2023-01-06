import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";

import { RestuarantsScreen } from "./src/features/restuarants/screens/restuarant.screen";

export default function App() {
  return (
    <>
      <RestuarantsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
