import { ModalPortal } from "react-native-modals";
import { PlayerContext } from "./PlayerContext";
import AppNavigation from "./navigation";
import React from "react";

const App = () => {
  return (
    <PlayerContext>
     
      <AppNavigation />
      <ModalPortal />
    </PlayerContext>
  );
}

export default App;