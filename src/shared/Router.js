import { BrowserRouter, Route, Routes } from "react-router-dom";
import JENNIE from "pages/JENNIE";
import JISOO from "pages/JISOO";
import ROSE from "pages/ROSE";
import LISA from "pages/LISA";
import Layout from "components/Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/jennie" element={<JENNIE />} />
        <Route path="/jisoo" element={<JISOO />} />
        <Route path="/rose" element={<ROSE />} />
        <Route path="/lisa" element={<LISA />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
