import React from "react";
import { Link } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import NavBar from "./NavBar";
import Whiteboard from "./Whiteboard";

export default () => (
  <div id="app">
    <NavBar />
    <DndProvider backend={HTML5Backend}>
      <Whiteboard />
    </DndProvider>
  </div>
);
