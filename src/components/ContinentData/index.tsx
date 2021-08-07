import { Flex, Text } from "@chakra-ui/react";

interface ContinentDataProps {
  data: string
  dataType: string
}

export function ContinentData({ data, dataType }: ContinentDataProps) {
  return (
    <Flex
      flexDir="column"
      alignItems="center"
    >
      <Text
        fontSize="3rem"
        fontWeight="600"
        lineHeight="4.5rem"
        color="yellow.550"
      >
        { data }
      </Text>
      <Text
        fontSize="1.5rem"
        fontWeight="600"
        lineHeight="2.25rem"
      >
        { dataType }
      </Text>
    </Flex>
  )
}