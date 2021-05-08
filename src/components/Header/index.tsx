import { Flex } from "@chakra-ui/layout";

export function Header() {
  return (
    <Flex
      align="center"
      justify="center"
      py="4"
      bg="gray.50"
    >
      <img src='./logo.svg' />
    </Flex>
  )
}