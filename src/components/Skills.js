import React from "react";
import Card from "./Card.js";
import { Box, Flex } from "@chakra-ui/react";

const Skills = ({ data }) => {
  return (
    <Box>
      <h1>Skills Container</h1>
      <Flex gap={5}>
        {data.map((skill, id) => {
          const { title, steps, picture } = skill;
          console.log(steps);
          return <Card title={title} steps={steps} picture={picture} key={id} />;
        })}
      </Flex>
    </Box>
  );
};

export default Skills;
