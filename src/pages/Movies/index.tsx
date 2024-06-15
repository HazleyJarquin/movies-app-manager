import { Box, Button, Grid, GridItem, Skeleton, Text } from "@chakra-ui/react";
import { useGetMovieList } from "../../services/getListMovie.service";
import { Card } from "../../components/Card";
import { IMoviesListResponse } from "../../interfaces";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

export const Movies = () => {
  const [page, setPage] = useState(1);
  const { t } = useTranslation();

  const { data: movieListData, isLoading: movieListLoading } =
    useGetMovieList(page);

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  return (
    <Box w={"100%"}>
      {movieListLoading ? (
        <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={4}>
          {Array.from({ length: 12 }).map((_, index) => (
            <GridItem key={index}>
              <Skeleton height="300px" />
            </GridItem>
          ))}
        </Grid>
      ) : (
        <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={4}>
          {movieListData?.results?.map((movie: IMoviesListResponse) => (
            <GridItem key={movie.id}>
              <Card
                title={movie.title}
                description={movie.overview}
                srcImage={movie.poster_path}
              />
            </GridItem>
          ))}
        </Grid>
      )}

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
    </Box>
  );
};
