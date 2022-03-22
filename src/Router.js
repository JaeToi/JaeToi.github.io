import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/pages/Main";
import TodoList from "./components/pages/TodoList";
import YoutubeWatch from "./components/pages/YotubeWatch";
import Youtube from "./components/pages/Youtube";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/youtube" element={<Youtube />} />
        <Route path="/youtube/:videoId" element={<YoutubeWatch />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
