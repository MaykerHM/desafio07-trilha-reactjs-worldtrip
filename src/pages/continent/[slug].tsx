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
            height={ ["9.375rem", "9.375rem", "9.375rem", "31.25rem", "31.25rem"] }
          >
            <Img
              src={ continentSelected.continentIMG }
              objectFit="cover"
              minW="100vw"
              height={ ["9.375rem", "9.375rem", "9.375rem", "31.25rem", "31.25rem"] }
              position="absolute"
              zIndex="-1"
            ></Img>
            <Flex
              justifyContent={ ["center", "center", "center", "flex-start", "flex-start"] }
              alignItems={ ["center", "center", "center", null, null] }
              height={ ["9.375rem", "9.375rem", "9.375rem", "31.25rem", "31.25rem"] }
              width="100vw"
            >
              <Text
                color="gray.50"
                fontSize={ ["1.75rem", "1.75rem", "1.75rem", "3rem", "3rem"] }
                lineHeight={ ["2.625rem", "2.625rem", "2.625rem", "4.5rem", "4.5rem"] }
                fontWeight="600"
                marginLeft={ [null, null, null, "8.75rem", "8.75rem"] }
                paddingTop={ [null, null, null, "23rem", "23rem"] }
              >
                { continentSelected.name }
              </Text >
            </Flex>
          </Box >
          <Flex
            flexDir="column"
            alignItems="center"
            width="100vw"
          >
            <Flex
              marginTop={ ["1.5rem", "1.5rem", "1.5rem", "5rem", "5rem"] }
              flexDir={ ["column", "column", "column", "column", "row"] }
            >
              <Text
                fontWeight="400"
                fontSize={ ["0.875rem", "0.875rem", "0.875rem", "1.5rem", "1.5rem"] }
                lineHeight={ ["1.3125rem", "1.3125rem", "1.3125rem", "2.25rem", "2.25rem"] }
                textAlign="justify"
                maxW={ ["80vw", "80vw", "80vw", "80vw", "40vw"] }
                marginRight={ ["0vw", "0vw", "0vw", "0vw", "5vw"] }
              >
                { continentSelected.description }
              </Text>
              <Flex
                marginTop={ ["1rem", "1rem", "1rem", "5rem", "0rem"] }
                width={ ["80vw", "80vw", "80vw", "80vw", "35vw"] }
                justifyContent={ ["space-between", "space-between", "space-between", "space-between", "space-around"] }
                alignItems={ ["flex-start", "flex-start", "flex-start", "flex-start", "center"] }
              >
                <ContinentData data={ continentSelected.countriesNumber } dataType="países" />
                <ContinentData data={ continentSelected.languagesNumber } dataType="línguas" />
                <ContinentData data={ continentSelected.mostVisited100 } dataType="cidades +100" />
              </Flex>
            </Flex>
            <Flex
              marginTop={ ["2rem", "2rem", "2rem", "5rem", "5rem"] }
              flexDir="column"
            >
              <Text
                fontSize={ ["1.5rem", "1.5rem", "1.5rem", "2.25rem", "2.25rem"] }
                lineHeight={ ["2.25rem", "2.25rem", "2.25rem", "3.375rem", "3.375rem"] }
                fontWeight="500"
                marginBottom={ ["1.25rem", "1.25rem", "1.25rem", "2.5rem", "2.5rem"] }
              >Cidades +100</Text>
              <Wrap
                spacing={ ["20px", "20px", "20px", "45px", "45px"] }
                width="80vw"
                justify={ ["center", "center", "center", "flex-start", "flex-start"] }
              >
                { continentSelected.cities.map(cities => (
                  <WrapItem>
                    <Box
                      key={ cities.id }
                      height="279px"
                      width="256px"
                      border="1px solid rgba(255, 186, 8, 0.5)"
                      backgroundColor="#FFFFFF"
                      borderRadius="4px"
                      marginBottom={ [null, null, null, "3px", "3px"] }
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
                        margin="0px 24px"
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
                            marginBottom="12px"
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