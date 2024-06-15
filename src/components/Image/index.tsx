import { Image as ChakraImage } from "@chakra-ui/react";

interface Props {
  srcImage: string;
  alt: string;
}

export const Image = ({ alt, srcImage }: Props) => {
  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";
  };
  return (
    <ChakraImage
      w={"100%"}
      src={srcImage}
      alt={alt}
      borderRadius="lg"
      height="160px"
      objectFit="fill"
      onError={handleImageError}
    />
  );
};
