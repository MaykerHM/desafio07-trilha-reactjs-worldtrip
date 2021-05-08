import { Flex, Image, Text } from "@chakra-ui/react";

interface TypeProps {
  src: string
  text: string
}

export function Type({ src, text }: TypeProps) {
  return (
    <Flex flexDir="column" align="center">
      <Image src={ src } width="85px" />
      <Text mt="1.5rem" >{ text }</Text>
    </Flex>
  )
}