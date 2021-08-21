import { Flex, Text } from "@chakra-ui/react";

interface ContinentDataProps {
  data: string
  dataType: string
}

export function ContinentData({ data, dataType }: ContinentDataProps) {
  return (
    <Flex
      flexDir="column"
      alignItems={ ["flex-start", "flex-start", "flex-start", "flex-start", "center"] }
    >
      <Text
        fontSize={ ["1.5rem", "1.5rem", "1.5rem", "3rem", "3rem"] }
        fontWeight="600"
        lineHeight={ ["2.25rem", "2.25rem", "2.25rem", "4.5rem", "4.5rem"] }
        color="yellow.550"
      >
        { data }
      </Text>
      <Text
        fontSize={ ["1.125rem", "1.125rem", "1.125rem", "1.5rem", "1.5rem"] }
        fontWeight={ ["400", "400", "400", "600", "600"] }
        lineHeight={ ["1.6875rem", "1.6875rem", "1.6875rem", "2.25rem", "2.25rem"] }
      >
        { dataType }
      </Text>
    </Flex>
  )
}