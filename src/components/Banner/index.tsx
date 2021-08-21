import { Box, Flex, Image, Text } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      justify="space-between"
    >
      <Image
        src="./assets/background.svg"
        position="absolute"
        zIndex="-1"
        objectFit="cover"
        minWidth="100vw"
        height={ ["163px", "163px", "163px", "335px", "335px"] }
      />
      <Flex
        flexDir="column"
        justifyContent={ ["center", "center", "center", null, null] }
        height={ ["163px", "163px", "163px", "335px", "335px"] }
        ml={ ["1rem", "1rem", "1rem", "2rem", "8.75rem"] }
      >
        <Text
          fontSize={ ["1.25rem", "1.25rem", "1.25rem", "2.25rem", "2.25rem"] }
          color="gray.50"
          lineHeight={ ["1.875rem", "1.875rem", "1.875rem", "4.5rem", "4.5rem"] }
        >
          5 Continentes,<br />infinitas possibilidades.
        </Text>
        <Text
          fontSize={ ["0.875rem", "0.875rem", "0.875rem", "1.25rem", "1.5rem"] }
          color="gray.100"
          lineHeight="1.875rem"
        >
          Chegou a hora de tirar do papel a viagem que você<br />sempre sonhou.</Text>
      </Flex>
      <Flex
        pt="4.75rem"
        mr={ ["1rem", "1rem", "1rem", "2rem", "8.75rem"] }
      >
        <Image
          src="./assets/airplane.svg"
          alt="Avião"
          display={ ["none", "none", "none", "block", "block"] }
          width={ [null, null, null, "300px", "450px"] }
        />
      </Flex>
    </Flex>
  )
}