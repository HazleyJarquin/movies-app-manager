import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Button, Text } from "@chakra-ui/react";
import { TFunction } from "i18next";

interface MovieListData {
  page: number;
  total_results: number;
}

interface Props {
  page: number;
  movieListData: MovieListData;
  handlePrevPage: () => void;
  handleNextPage: () => void;
  t: TFunction;
}

export const PaginationButtons = ({
  handleNextPage,
  handlePrevPage,
  movieListData,
  page,
  t,
}: Props) => {
  return (
    <Box
      mt={4}
      width={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={4}
    >
      <Button
        leftIcon={<ArrowLeftIcon />}
        variant="ghost"
        isDisabled={page === 1}
        onClick={handlePrevPage}
      >
        {t("PREV_TEXT")}
      </Button>

      <Text size={"sm"}>
        {movieListData?.page} / {movieListData?.total_results}
      </Text>
      <Button
        rightIcon={<ArrowRightIcon />}
        variant="ghost"
        onClick={handleNextPage}
      >
        {t("NEXT_TEXT")}
      </Button>
    </Box>
  );
};
