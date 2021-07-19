import { Divider, Flex, Text } from "@chakra-ui/layout";
import { Banner } from "../components/Banner";
import { Slider } from "../components/Slider";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {

  return (
    <>
      <Banner />
      <TravelTypes />
      <Flex justify="center" >
        <Divider width="90px" border="2px" borderColor="#47585B" mt="5rem" />
      </Flex>
      <Text align="center" fontSize="2.25rem" lineHeight="3.375rem" py="3.25rem" >Vamos nessa?<br />Então escolha seu continente</Text>
      <Slider />
    </>
  )
}
