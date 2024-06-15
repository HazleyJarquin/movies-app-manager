import Home from "./pages/Home";
import Mainlayout from "./components/Mainlayout";
import { Navigate, Route, Routes } from "react-router-dom";

import { Suspense } from "react";

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
      </Route>
    </Routes>
  );
}

export default App;
