import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
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

  // letter 삭제하기 버튼
  const removeBtn = (id) => {
    const removeLetters = letters.filter((letter) => letter.id !== id);

    setLetters(removeLetters);
  };

  // letter 수정하기 버튼
  const updateBtn = (id) => {
    const updatedLetters = letters.map((letter) => {
      if (letter.id === id) {
        return {
          ...letter,
          isUpdate: !letter.isUpdate,
          content: letter.content,
        };
      }
      return letter;
    });
    setLetters(updatedLetters);
  };

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<MainPage letters={letters} setLetters={setLetters} />}
          />
          <Route
            path="/JENNIE/:id"
            element={
              <JENNIE
                letters={letters}
                removeBtn={removeBtn}
                updateBtn={updateBtn}
              />
            }
          />
          <Route
            path="/JISOO/:id"
            element={
              <JISOO
                letters={letters}
                removeBtn={removeBtn}
                updateBtn={updateBtn}
              />
            }
          />
          <Route
            path="/ROSÉ/:id"
            element={
              <ROSÉ
                letters={letters}
                removeBtn={removeBtn}
                updateBtn={updateBtn}
              />
            }
          />
          <Route
            path="/LISA/:id"
            element={
              <LISA
                letters={letters}
                removeBtn={removeBtn}
                updateBtn={updateBtn}
              />
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
