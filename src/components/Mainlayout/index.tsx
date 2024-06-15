import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar";

const Mainlayout = () => {
  return (
    <Box
      width={"100%"}
      height={"100vh"}
      display={"flex"}
      flexDirection={"column"}
    >
      <Navbar />
      <Box
        w={"100%"}
        h={"90vh"}
        overflow={"auto"}
        padding={"20px 20px 0px 20px"}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Mainlayout;
