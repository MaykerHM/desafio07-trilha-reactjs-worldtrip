import { Flex } from "@chakra-ui/react";
import { Type } from "./Type";

export function TravelTypes() {
  return (
    <Flex
      justify="space-between"
      margin={ ["2.25rem 3.125rem", "2.25rem 3.125rem", "2.25rem 3.125rem", "5rem 8.75rem", "5rem 8.75rem"] }
      flexDir={ ["column", "column", "column", "row", "row"] }
    >
      <Flex
        flex="2"
        justify="space-around"
        mb={ ["1.5rem", "1.5rem", "1.5rem", null, null] }
      >
        <Type src="./assets/cocktail.svg" text="vida noturna" />
        <Type src="./assets/surf.svg" text="praia" />
      </Flex>
      <Flex
        flex="2"
        justify="space-around"
        mb={ ["1.5rem", "1.5rem", "1.5rem", null, null] }
      >
        <Type src="./assets/building.svg" text="moderno" />
        <Type src="./assets/museum.svg" text="clássico" />
      </Flex>
      <Flex
        flex="1"
        justify="center"
      >
        <Type src="./assets/earth.svg" text="e mais..." />
      </Flex>
    </Flex>
  )
}