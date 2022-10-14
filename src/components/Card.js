import React, { useState } from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";

const Card = ({ title, steps, picture }) => {
  const [toggle, setToggle] = useState(false);
  if (toggle) {
    return (
      <Box onClick={() => setToggle(!toggle)}>
        <h1> {title} </h1>
        {steps.map((step, id) => {
          return (
            <p>
              Step {id + 1}: {step}
            </p>
          );
        })}
      </Box>
    );
  }
  return (
    <Flex className="card-container" onClick={() => setToggle(!toggle)}>
      <Heading as="h1" size="sm">
        {title}
      </Heading>
      {/* Image */}
      <Flex className="card" bgImage={picture} bgSize="cover" bgPos="center" />
    </Flex>
  );
};

export default Card;
