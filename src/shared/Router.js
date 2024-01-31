import { BrowserRouter, Route, Routes } from "react-router-dom";
import JENNIE from "pages/JENNIE";
import JISOO from "pages/JISOO";
import ROSE from "pages/ROSE";
import LISA from "pages/LISA";
import Layout from "components/layout/Layout";
import MainPage from "components/MainPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/jennie" element={<JENNIE />} />
          <Route path="/jisoo" element={<JISOO />} />
          <Route path="/rose" element={<ROSE />} />
          <Route path="/lisa" element={<LISA />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
