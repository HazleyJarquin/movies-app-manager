import { Box, Heading } from "@chakra-ui/react";
import { DarkModeButtons } from "../DarkModeButtons";
import { useNavigate } from "react-router-dom";
import { NavLinks } from "./components/NavLinks";
import { ChangeLanguageButtons } from "../ChangeLanguageButtons";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
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
          M-A-M
        </Heading>

        <Box display={{ base: "flex", md: "none" }} gap={3}>
          <DarkModeButtons />
          <ChangeLanguageButtons />
        </Box>
      </Box>

      <Box>
        <NavLinks t={t} navigate={navigate} />
      </Box>

      <Box display={{ base: "none", md: "flex" }} gap={3}>
        <DarkModeButtons />
        <ChangeLanguageButtons />
      </Box>
    </Box>
  );
};
