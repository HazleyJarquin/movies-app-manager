import {
  Card as ChakraCard,
  CardBody,
  CardFooter,
  Button,
  Stack,
  Heading,
  Text,
  Divider,
  useColorMode,
} from "@chakra-ui/react";
import { Image } from "../Image";
import { TFunction } from "i18next";

interface Props {
  srcImage: string;
  title: string;
  description: string;
  buttonDetail: () => void;
  t: TFunction;
}

export const Card = ({
  description,
  srcImage,
  title,
  buttonDetail,
  t,
}: Props) => {
  const { colorMode } = useColorMode();

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
        <Image srcImage={srcImage} alt={title} />
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
        <Button onClick={buttonDetail} variant="solid" colorScheme="blue">
          {t("VIEW_DETAILS_TEXT")}
        </Button>
      </CardFooter>
    </ChakraCard>
  );
};
