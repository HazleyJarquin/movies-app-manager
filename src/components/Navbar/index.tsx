import { Box, Heading } from "@chakra-ui/react";
import { DarkModeButtons } from "../DarkModeButtons";
import { useNavigate } from "react-router-dom";
import { NavLinks } from "./components/NavLinks";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Box
      width={"100%"}
      height={"10vh"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      padding={"0px 20px 0px 20px"}
      borderBottom={"1px solid #ccc"}
    >
      <Heading onClick={() => navigate("/home")} cursor={"pointer"}>
        M-A-M
      </Heading>

      <NavLinks navigate={navigate} />

      <DarkModeButtons />
    </Box>
  );
};
