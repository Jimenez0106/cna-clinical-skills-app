import { Box, Flex } from "@chakra-ui/react";
import React from "react";

const Display = ({ displayData }) => {
  if (displayData) {
    const { title, prompt, steps } = displayData;
    console.log(displayData);
    return (
      <Flex className="display-container">
        <h1>{title}</h1>
        <p>{prompt}</p>
        <Flex className="info-container">
          {/* Steps */}
          <Box className="steps-container">
            {steps.map((step, id) => {
              return (
                <p className="step">
                  Step {id + 1}: {step}
                </p>
              );
            })}
          </Box>
          {/* Video */}
          <Box className="video-container">
            <h1>video imbed here</h1>
          </Box>
        </Flex>
      </Flex>
    );
  }

  return (
    <Flex className="display-container">
      <h1>Select a skill below</h1>
    </Flex>
  );
  //   const { title, steps, picture } = display;
  //   return (
  //     <Flex className="display-container" bg="red">
  //       <h1>{title}</h1>
  //       <p>{prompt}</p>
  //     </Flex>
  //   );
};

export default Display;
