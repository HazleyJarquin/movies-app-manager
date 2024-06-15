import { Box, Button } from "@chakra-ui/react";

interface Props {
  navigate: (path: string) => void;
}

export const NavLinks = ({ navigate }: Props) => {
  const links = [
    {
      id: 1,
      name: "Home",
      path: "/home",
    },
    {
      id: 2,
      name: "Movies",
      path: "/movies",
    },
    {
      id: 3,
      name: "Series",
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
