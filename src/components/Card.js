import React, { useState } from "react";
import { Box, Heading } from "@chakra-ui/react";

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
    <Box
      className="card"
      bgImage={picture}
      bgSize="cover"
      onClick={() => setToggle(!toggle)}
    >
      <Heading as="h1" size="lg">
        {title}
      </Heading>
    </Box>
  );
};

export default Card;
