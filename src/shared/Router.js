import { BrowserRouter, Route, Routes } from "react-router-dom";
import JENNIE from "pages/JENNIE";
import JISOO from "pages/JISOO";
import ROSÉ from "pages/ROSÉ";
import LISA from "pages/LISA";
import Layout from "components/layout/Layout";
import MainPage from "components/MainPage";
import { useState } from "react";
import fakeData from "../assets/json/fakeData.json";

const Router = () => {
  const [letters, setLetters] = useState(fakeData);
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<MainPage letters={letters} setLetters={setLetters} />}
          />
          <Route path="/JENNIE/:id" element={<JENNIE letters={letters} />} />
          <Route path="/JISOO/:id" element={<JISOO letters={letters} />} />
          <Route path="/ROSÉ/:id" element={<ROSÉ letters={letters} />} />
          <Route path="/LISA/:id" element={<LISA letters={letters} />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
