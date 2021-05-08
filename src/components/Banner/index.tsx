import { Flex, Image, Text } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      justify="space-around"
    >
      <Image src="./background.svg" position="absolute" zIndex="-1" minWidth={ ["1440px", "1440px", "1440px", "100%", "100%"] } />
      <Flex
        flexDir="column"
      >
        <Text
          fontSize={ ["1.25rem", "1.25rem", "2.25rem", "3.25rem", "3.25rem"] }
          color="gray.50"
          mt={ ["5rem", "5rem", "5rem", "5rem", "7rem"] }
          mb="1.25rem"
          lineHeight={ ["3.375rem", "3.375rem", "3.375rem", "4.5rem", "5rem"] }
        >
          5 Continentes,<br />infinitas possibilidades.
        </Text>
        <Text
          fontSize={ ["0.875rem", "0.875rem", "1.25rem", "1.5rem", "1.5rem"] }
          color="gray.100"
          lineHeight="1.875rem"
        >
          Chegou a hora de tirar do papel a viagem que você<br />sempre sonhou.</Text>
      </Flex>
      <Flex pt="4.75rem" >
        { typeof window !== "undefined" &&
          (window?.innerWidth < 375 ?
            null :
            (<Image src="./airplane.svg" alt="Avião" transform="rotate(3deg)" width={ [null, null, null, "500px", "600px"] } />)
          )
        }
      </Flex>
    </Flex>
  )
}