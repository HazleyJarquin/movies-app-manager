import { Box, Grid, GridItem, Skeleton, useDisclosure } from "@chakra-ui/react";
import { useGetMovieList } from "../../services/getListMovie.service";
import { Card } from "../../components/Card";
import { IMoviesListResponse } from "../../interfaces";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Modal } from "../../components/Modal";
import { useGetMovieIdStore } from "../../store/useGetMovieId.store";
import { useGetMovieById } from "../../services/getMovieById.service";
import { PaginationButtons } from "../../components/PaginationButtons";
import { moneyFormat } from "../../utils/MoneyFormat";

export const Movies = () => {
  const [page, setPage] = useState(1);
  const { movieId, setMovieId } = useGetMovieIdStore();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useTranslation();

  const { data: movieByIdData, isLoading: movieByIdLoading } =
    useGetMovieById(movieId);

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

  const handleOpenModal = (movieId: number) => {
    setMovieId(movieId);
    onOpen();
  };

  const handleButtonClick = (path: string) => {
    window.open(path, "_blank");
  };

  return (
    <Box w={"100%"}>
      <Modal
        title={movieByIdData?.title || ""}
        description={movieByIdData?.overview || ""}
        srcImage={movieByIdData?.poster_path || ""}
        release_date={movieByIdData?.release_date || ""}
        revenue={moneyFormat(movieByIdData?.revenue || 0)}
        vote_average={movieByIdData?.vote_average || 0}
        isOpen={isOpen}
        onClose={onClose}
        isLoading={movieByIdLoading}
        buttonTitle="Go Home Page"
        handleButtonClick={() =>
          handleButtonClick(movieByIdData?.homepage || "")
        }
      />
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
                buttonDetail={() => handleOpenModal(movie.id)}
              />
            </GridItem>
          ))}
        </Grid>
      )}

      <PaginationButtons
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        movieListData={movieListData}
        page={page}
        t={t}
      />
    </Box>
  );
};
