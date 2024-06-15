import { Box, Heading } from "@chakra-ui/react";
import { DarkModeButtons } from "../DarkModeButtons";
import { useNavigate } from "react-router-dom";
import { NavLinks } from "./components/NavLinks";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Box
      width={"100%"}
      height={{ base: "auto", md: "10vh" }}
      display={"flex"}
      flexDirection={{ base: "column", md: "row" }}
      justifyContent={"space-between"}
      alignItems={"center"}
      padding={"0px 20px 0px 20px"}
      borderBottom={"1px solid #ccc"}
    >
      <Box
        w={{ base: "100%", md: "auto" }}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Heading onClick={() => navigate("/home")} cursor={"pointer"}>
          Test
        </Heading>

        <Box display={{ base: "flex", md: "none" }}>
          <DarkModeButtons />
        </Box>
      </Box>

      <Box>
        <NavLinks navigate={navigate} />
      </Box>

      <Box display={{ base: "none", md: "flex" }}>
        <DarkModeButtons />
      </Box>
    </Box>
  );
};
