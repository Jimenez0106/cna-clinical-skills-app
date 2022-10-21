import React, {  useState } from "react";
import { Flex } from "@chakra-ui/react";
import CLINICAL_DATA from "./data/DATA.js";
import Skills from "./components/Skills.js";
import Header from "./components/Header.js";
import Display from "./components/Display.js";
import SideNav from "./components/SideNav.js";
import "./styles/style.scss";


const App = () => {
  const [data, setData] = useState(CLINICAL_DATA);
  const [displayData, setDisplayData] = useState()

  if (data) {
    return (
      <Flex className="App">
        <Header />
        <SideNav /> 
        <Display displayData={displayData}/>
        <Skills data={data} setDisplayData={setDisplayData}/>
      </Flex>
    );
  }

  return (
    <Flex className="App">
      <h1>LOADING</h1>
    </Flex>
  );
};

export default App;
