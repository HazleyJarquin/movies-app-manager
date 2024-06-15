import {
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

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  isLoading: boolean;
  handleButtonClick: () => void;
  buttonTitle: string;
  description: string;
  srcImage: string;
}
export const Modal = ({
  isOpen,
  onClose,
  title,
  isLoading,
  buttonTitle,
  handleButtonClick,
  description,
  srcImage,
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
          <ModalBody pb={6}>
            <Image alt={title ? title : ""} srcImage={srcImage} />

            {isLoading ? <SkeletonText /> : <Text>{description}</Text>}
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
