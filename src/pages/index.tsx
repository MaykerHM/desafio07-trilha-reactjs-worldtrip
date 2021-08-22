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
        <Divider width={ ["60px", "60px", "60px", "90px", "90px"] } border={ ["1px", "1px", "1px", "2px", "2px"] } borderColor="#47585B" />
      </Flex>
      <Text
        align="center"
        fontSize={ ["1.25rem", "1.25rem", "1.25rem", "2.25rem", "2.25rem"] }
        lineHeight={ ["1.875rem", "1.875rem", "1.875rem", "3.75rem", "3.75rem"] }
        my={ ["1.5rem", "1.5rem", "1.5rem", "3.25rem", "3.25rem"] }
      >Vamos nessa?<br />Então escolha seu continente</Text>
      <Slider />
    </>
  )
}
