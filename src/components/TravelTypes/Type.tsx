import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface TypeProps {
  src: string
  text: string
}

export function Type({ src, text }: TypeProps) {
  return (
    <Flex flexDir={ ["row", "row", "row", "column", "column"] } align="center">
      <Image
        src={ src }
        width={ [null, null, null, "65px", "85px"] }
        display={ ["none", "none", "none", "block", "block"] }
      />
      <Box
        width="8px"
        height="8px"
        borderRadius="full"
        backgroundColor="yellow.550"
        display={ ["block", "block", "block", "none", "none"] }
        marginRight="0.5rem"
      ></Box>
      <Text
        mt={ [null, null, null, "1.5rem", "1.5rem"] }
        fontSize={ ["1.125rem", "1.125rem", "1.125rem", "1.2rem", "1.5rem"] }
        lineHeight={ ["1.6875rem", "1.6875rem", "1.6875rem", "2.25rem", "2.25rem"] }
        fontWeight="600"
      >{ text }</Text>
    </Flex>
  )
}