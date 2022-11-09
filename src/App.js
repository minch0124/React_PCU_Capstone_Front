// eslint-disable

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Appbar from "./Appbar";
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";
import UserPage from "./UserPage";

function App() {
  return (
    <BrowserRouter>
    <Appbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/User" element={<UserPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
