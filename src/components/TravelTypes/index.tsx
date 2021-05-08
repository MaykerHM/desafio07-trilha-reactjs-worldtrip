import { Flex } from "@chakra-ui/react";
import { Type } from "./Type";

export function TravelTypes() {
  return (
    <Flex justify="space-around" mt="5rem" px="8.75rem">
      <Type src="./cocktail.svg" text="vida noturna" />
      <Type src="./surf.svg" text="praia" />
      <Type src="./building.svg" text="moderno" />
      <Type src="./museum.svg" text="clássico" />
      <Type src="./earth.svg" text="e mais..." />
    </Flex>
  )
}