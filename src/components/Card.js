import React from "react";
import { Flex, Heading } from "@chakra-ui/react";

const Card = ({ skill, setDisplayData }) => {
  const { title, picture } = skill;
  return (
    <Flex className="card-container" onClick={() => setDisplayData(skill)}>
      {/* Title */}
      <Heading as="h1" size="sm">
        {title}
      </Heading>
      {/* Image */}
      <Flex className="card" bgImage={picture} bgSize="cover" bgPos="center" />
      <input className="checkbox" type="checkbox" />
    </Flex>
  );
};

export default Card;
