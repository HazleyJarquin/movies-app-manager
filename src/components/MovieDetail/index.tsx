import { Box, Text } from "@chakra-ui/react";
interface Props {
  title: string;
  description: string | number;
}

export const MovieDetail = ({ title, description }: Props) => {
  return (
    <Box display={"flex"} flexDirection={"column"} textAlign={"center"}>
      <Text>{title}</Text>
      <Text> {description}</Text>
    </Box>
  );
};
