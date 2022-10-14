import React, {  useState } from "react";
import CLINICAL_DATA from "./data/DATA.js";
import Skills from "./components/Skills.js";
import Header from "./components/Header.js";
import "./App.css";
import { Flex } from "@chakra-ui/react";

const App = () => {
  const [data, setData] = useState(CLINICAL_DATA);

  if (data) {
    return (
      <div className="App">
        <Header />
        <Skills data={data} />
      </div>
    );
  }

  return (
    <Flex className="App">
      <h1>LOADING</h1>
    </Flex>
  );
};

export default App;
