import { Flex, Image, Text } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      justify="space-around"
    >
      <Image src="./assets/background.svg" position="absolute" zIndex="-1" objectFit="cover" minWidth="100%" minH="163px" />
      <Flex
        flexDir="column"
      >
        <Text
          fontSize={ ["1.25rem", "1.25rem", "1.25rem", "2.25rem", "2.25rem"] }
          color="gray.50"
          mt={ [null, null, null, "5rem", "5rem"] }
          mb={[null, null, null, "1.25rem", "1.25rem"]}
          lineHeight={ ["1.875rem", "3.375rem", "3.375rem", "4.5rem", "4.5rem"] }
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
      <Flex pt="4.75rem" >
        <Image 
          src="./assets/airplane.svg" 
          alt="Avião" 
          display={["none", "none","none", "block", "block"]} 
          width={ [null, null, null, "400px", "450px"] } 
        />
      </Flex>
    </Flex>
  )
}