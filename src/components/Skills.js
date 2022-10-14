import React from "react";
import Card from "./Card.js";
import { Box, Flex } from "@chakra-ui/react";

const Skills = ({ data }) => {
  return (
    <Flex gap={5} wrap="wrap" justifyContent="center" alignItems="center">
      {data.map((skill, id) => {
        const { title, steps, picture } = skill;
        console.log(steps);
        return <Card title={title} steps={steps} picture={picture} key={id} />;
      })}
    </Flex>
  );
};

export default Skills;
