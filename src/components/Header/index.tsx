import { Flex, Link } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      align="center"
      justify="center"
      py="4"
      bg="gray.50"
    >
      <Link
        href="/"
      >
        <img src='/logo.svg' />
      </Link>
    </Flex>
  )
}