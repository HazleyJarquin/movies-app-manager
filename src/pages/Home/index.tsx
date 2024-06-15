import { Box, Heading, Image } from "@chakra-ui/react";
import { Carousel } from "../../components/Carousel";
import { data } from "./config";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <Box w={"100%"} display={"flex"} flexDirection={"column"} gap={4}>
      <Heading textAlign={"center"} size={"lg"}>
        {t("WELCOME_TEXT")}
      </Heading>
      <Box>
        <Carousel
          height="500px"
          data={data.map((data, index: number) => (
            <Image
              key={data.id + index}
              objectFit={"cover"}
              w={"100%"}
              height={"100%"}
              alt="alt"
              src={data.src}
            />
          ))}
        />
      </Box>
    </Box>
  );
};

export default Home;
