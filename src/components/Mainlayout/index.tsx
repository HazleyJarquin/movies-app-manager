import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const Mainlayout = () => {
  return (
    <Box display={"flex"} width={"100%"} height={"100vh"}>
      <Box></Box>
      <Box
      // style={{
      //   width: "-webkit-fill-available",
      //   display: "flex",
      //   justifyContent: "center",
      //   padding: "1rem 2.5rem",
      // }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Mainlayout;
