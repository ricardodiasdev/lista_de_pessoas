import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Home from "./src/view/Home";
import Person from "./src/view/Person";

const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
    Person,
  })
);

export default function App() {
  return  <Routes />
}
