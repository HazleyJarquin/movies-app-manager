import {
  Box,
  Button,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import { Modal as ChakraModal } from "@chakra-ui/react";
import { Image } from "../Image";
import { MovieDetail } from "../MovieDetail";
import { TFunction } from "i18next";

interface Props {
  t: TFunction;
  isOpen: boolean;
  onClose: () => void;
  title: string;
  isLoading: boolean;
  handleButtonClick: () => void;
  buttonTitle: string;
  description: string;
  srcImage: string;
  release_date: string;
  revenue: number | string;
  vote_average: number | string;
}
export const Modal = ({
  t,
  isOpen,
  onClose,
  title,
  isLoading,
  buttonTitle,
  handleButtonClick,
  description,
  srcImage,
  release_date,
  revenue,
  vote_average,
}: Props) => {
  return (
    <>
      <ChakraModal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {isLoading ? <SkeletonText /> : <Text>{title}</Text>}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} display={"flex"} flexDirection={"column"} gap={5}>
            <Image alt={title ? title : ""} srcImage={srcImage} />

            {isLoading ? (
              <SkeletonText />
            ) : (
              <Text noOfLines={6}>{description}</Text>
            )}

            {isLoading ? (
              <SkeletonText />
            ) : (
              <Box
                width={"100%"}
                display={"flex"}
                justifyContent={"space-between"}
              >
                <MovieDetail
                  title={t("RELEASE_DATE_TEXT")}
                  description={release_date}
                />
                <MovieDetail title={t("REVENUE_TEXT")} description={revenue} />
                <MovieDetail
                  title={t("RATING_TEXT")}
                  description={vote_average}
                />
              </Box>
            )}
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleButtonClick} colorScheme="blue" mr={3}>
              {buttonTitle}
            </Button>
          </ModalFooter>
        </ModalContent>
      </ChakraModal>
    </>
  );
};
