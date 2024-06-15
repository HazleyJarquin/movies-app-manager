import Home from "./pages/Home";
import Mainlayout from "./components/Mainlayout";
import { Navigate, Route, Routes } from "react-router-dom";

import { Suspense } from "react";
import { Movies } from "./pages/Movies";

function App() {
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

        <Route
          path="/movies"
          element={
            <Suspense fallback={<div>Cargando...</div>}>
              <Movies />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
