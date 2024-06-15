import { Outlet } from "react-router-dom";

const Mainlayout = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        // background: '#F3F4F6',
      }}
    >
      <div></div>
      <div
        style={{
          width: "-webkit-fill-available",
          display: "flex",
          justifyContent: "center",
          padding: "1rem 2.5rem",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Mainlayout;
