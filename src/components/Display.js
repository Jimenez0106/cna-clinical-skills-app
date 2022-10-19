import { Box, Flex } from "@chakra-ui/react";
import React from "react";

const Display = ({ displayData }) => {
  if (displayData) {
    const { title, prompt, steps, video } = displayData;

    return (
      <Flex className="display-container">
        <Box >
          <h1 className="title">{title}</h1>
          <p>{prompt}</p>
        </Box>

        <Flex className="info-container">
          {/* Steps */}
          <Flex className="steps-container">
            {steps.map((step, id) => {
              return (
                <Flex className="step" key={id}>
                  <h1>{`Step ${id + 1}:`}&nbsp; </h1>
                  <p>{step}</p>
                </Flex>
              );
            })}
          </Flex>
          {/* Video */}
          <Flex justifyContent="center" alignItems="center" w="50%">
            <Flex className="video-container">
              <iframe
                title={`${title} Video Demonstration`}
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                src={`https://www.youtube.com/embed/${video}`}
              />
            </Flex>
          </Flex>
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
