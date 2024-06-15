import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { useGetMovieById } from "./services/getMovieById.service";
import Mainlayout from "./components/Mainlayout";
import Home from "./pages/Home";
import { Suspense } from "react";

function App() {
  const { data: movieByIdData } = useGetMovieById(11);

  console.log("movieByIdData", movieByIdData);
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />

      <Route element={<Mainlayout />}>
        <Route
          path="/home"
          element={
            <Suspense fallback={<div>Cargando...</div>}>
              <Home />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
