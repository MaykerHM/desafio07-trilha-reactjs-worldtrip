import { Box, calc, Flex, Img, Text, Wrap, WrapItem } from '@chakra-ui/react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useContext } from 'react'
import { ContinentData } from '../../components/ContinentData'
import { ContinentsContext } from '../../continentsContext'

interface ContinentProps {
  slug: string
}

export default function Continent({ slug }: ContinentProps) {
  const continents = useContext(ContinentsContext)

  const continent = continents.filter(data => {
    if (data.name === slug) {
      return data
    }
  })

  return (
    <>
      { continent.map(continentSelected => (
        <>
          <Box
            height="31.25rem"
          >
            <Img
              src={ continentSelected.continentIMG }
              objectFit="cover"
              minW="100vw"
              height="31.25rem"
              position="absolute"
              zIndex="-1"
            ></Img>
            <Text
              color="gray.50"
              fontSize="3rem"
              lineHeight="4.5rem"
              fontWeight="600"
              marginLeft="8.75rem"
              paddingTop="23rem"
            >
              { continentSelected.name }
            </Text >
          </Box >
          <Flex
            flexDir="column"
            alignItems="center"
          >
            <Flex
              marginTop="5rem"
            >
              <Text
                fontWeight="400"
                fontSize="1.5rem"
                lineHeight="2.25rem"
                textAlign="justify"
                width="40vw"
                marginRight="5vw"
              >
                { continentSelected.description }
              </Text>
              <Flex
                width="34vw"
                justifyContent="space-between"
                alignItems="center"
              >
                <ContinentData data={ continentSelected.countriesNumber } dataType="países" />
                <ContinentData data={ continentSelected.languagesNumber } dataType="línguas" />
                <ContinentData data={ continentSelected.mostVisited100 } dataType="cidades +100" />
              </Flex>
            </Flex>
            <Flex
              marginTop="5rem"
              flexDir="column"
            >
              <Text
                fontSize="2.25rem"
                lineHeight="3.375rem"
                fontWeight="500"
              >Cidades +100</Text>
              <Wrap spacing="45px">
                { continentSelected.cities.map(cities => (
                  <WrapItem>
                    <Box
                      key={ cities.id }
                      height="279px"
                      width="256px"
                      border="1px solid rgba(255, 186, 8, 0.5)"
                      backgroundColor="#FFFFFF"
                      borderRadius="4px"
                      marginBottom="3rem"
                    >
                      <Img
                        src={ cities.cityIMG }
                        objectFit="cover"
                        width="256px"
                        height="173px"
                        borderRadius="4px 4px 0 0"
                      />
                      <Flex
                        justifyContent="space-between"
                        alignItems="center"
                        height="106px"
                      >
                        <Flex
                          flexDir="column"
                          marginBottom="3px"
                        >
                          <Text
                            fontSize="1.25rem"
                            lineHeight="1.6rem"
                            fontWeight="600"
                            color="gray.600"
                            fontFamily="Barlow"
                          >{ cities.name }</Text>
                          <Text
                            fontSize="1rem"
                            lineHeight="1.625rem"
                            fontWeight="500"
                            color="gray.350"
                            fontFamily="Barlow"
                          >{ cities.country }</Text>
                        </Flex>
                        <Img
                          src={ cities.flag }
                          boxSize="30px"
                          borderRadius="full"
                        />
                      </Flex>
                    </Box>
                  </WrapItem>
                )) }
              </Wrap>
            </Flex>
          </Flex>
        </>
      ))
      }
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params

  return {
    props: {
      slug
    }
  }
}