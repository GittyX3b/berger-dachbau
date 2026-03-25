import { Route, Routes, Navigate } from "react-router";

import MainLayout from "@layouts/MainLayout";

import Home from "@pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
