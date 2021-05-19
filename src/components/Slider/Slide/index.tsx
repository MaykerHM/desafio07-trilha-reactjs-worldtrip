import { Container, Image, Text } from "@chakra-ui/react";

interface SlideProps {
    continent: string
    description: string
    imageSRC: string
}

export function Slide({continent, description, imageSRC}: SlideProps) {
    return (
        <>
        <Container
            display="flex"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            color="gray.100"
          >
            <Text fontSize="3rem" >{continent}</Text>
            <Text fontSize="1.5rem" >{description}</Text>
          </Container>
          <Image
            position="absolute"
            zIndex="-1"
            src={imageSRC}
          />
        </>
    )
}