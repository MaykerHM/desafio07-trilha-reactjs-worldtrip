import { Flex } from "@chakra-ui/react";
import { Type } from "./Type";

export function TravelTypes() {
  return (
    <Flex justify="space-around" mt="5rem" px="8.75rem">
      <Type src="./assets/cocktail.svg" text="vida noturna" />
      <Type src="./assets/surf.svg" text="praia" />
      <Type src="./assets/building.svg" text="moderno" />
      <Type src="./assets/museum.svg" text="clássico" />
      <Type src="./assets/earth.svg" text="e mais..." />
    </Flex>
  )
}