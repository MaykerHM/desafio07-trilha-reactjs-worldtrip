import { background, Container, Image, Link, Text } from "@chakra-ui/react";

interface SlideProps {
    continent: string
    description: string
    imageSRC: string
}

export function Slide({continent, description, imageSRC}: SlideProps) {
  return (
      <Container
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="450px"
        overflow="hidden"
      >
          <Link
            color="gray.100"
            href={`/${continent}`}
            display="flex"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            textDecor="none"
            transition="0.2s"
          >
          <Text fontSize="3rem" >{continent}</Text>
          <Text fontSize="1.5rem" >{description}</Text>
          </Link>
          <Image
          pos="absolute"
          zIndex="-1"
          height={["250px","250px","450px","450px","450px"]}
          objectFit="cover"
          src={imageSRC}
          />
        </Container>
    )
}