import { Box, Button } from "@chakra-ui/react";
import { TFunction } from "i18next";

interface Props {
  navigate: (path: string) => void;
  t: TFunction;
}

export const NavLinks = ({ navigate, t }: Props) => {
  const links = [
    {
      id: 1,
      name: t("HOME_TITLE"),
      path: "/home",
    },
    {
      id: 2,
      name: t("MOVIES_TITLE"),
      path: "/movies",
    },
    {
      id: 3,
      name: t("SERIES_TITLE"),
      path: "/series",
    },
  ];
  return (
    <Box>
      {links.map((link, index) => (
        <Button
          key={link.id + index}
          variant="ghost"
          cursor={"pointer"}
          onClick={() => navigate(link.path)}
          marginRight={"10px"}
        >
          {link.name}
        </Button>
      ))}
    </Box>
  );
};
