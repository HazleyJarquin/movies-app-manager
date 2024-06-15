import {
  Card as ChakraCard,
  CardBody,
  CardFooter,
  Button,
  Stack,
  Heading,
  Text,
  Divider,
  Image,
  useColorMode,
} from "@chakra-ui/react";

interface Props {
  srcImage: string;
  title: string;
  description: string;
}

export const Card = ({ description, srcImage, title }: Props) => {
  const { colorMode } = useColorMode();

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";
  };
  return (
    <ChakraCard
      background={colorMode === "light" ? "#1a202c" : "#ffffff"}
      textColor={colorMode === "dark" ? "#1a202c" : "#ffffff"}
      width={"100%"}
      height={"100%"}
      maxW="sm"
      display="flex"
      flexDirection="column"
    >
      <CardBody flex="1">
        <Image
          w={"100%"}
          src={srcImage}
          alt={title}
          borderRadius="lg"
          height="160px"
          objectFit="fill"
          onError={handleImageError}
        />
        <Stack mt="6" spacing="3" px="4">
          <Heading size="md">{title}</Heading>

          <Text
            cursor={"pointer"}
            lineHeight="1.5"
            overflow="hidden"
            textOverflow="ellipsis"
            noOfLines={5}
          >
            {description}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter display={"flex"} justifyContent={"center"} py="3" px="4">
        <Button variant="solid" colorScheme="blue">
          View Detail
        </Button>
      </CardFooter>
    </ChakraCard>
  );
};
