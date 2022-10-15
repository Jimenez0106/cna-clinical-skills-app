import React from "react";
import Card from "./Card.js";
import { Flex } from "@chakra-ui/react";

const Skills = ({ data, setDisplayData }) => {
  return (
    <Flex
      gap={5}
      wrap="wrap"
      justifyContent="center"
      alignItems="center"
      padding={5}
    >
      {data.map((skill, id) => {
        return <Card skill={skill} key={id} setDisplayData={setDisplayData} />;
      })}
    </Flex>
  );
};

export default Skills;
