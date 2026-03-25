import { Route, Routes, Navigate } from "react-router";

import MainLayout from "@layouts/MainLayout";

import Home from "@pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Navigate to="/berger-dachbau" replace />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
