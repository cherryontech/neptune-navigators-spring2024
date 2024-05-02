import { Routes, Route, useNavigate } from "react-router-dom";
import { RouterProvider } from "react-aria-components";
import "./App.css";
import HomePage from "./Pages/Home";
import IndexPage from "./Pages/Index";

function App() {
  let navigate = useNavigate();

  return (
    <RouterProvider navigate={navigate}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/index" element={<IndexPage />} />
      </Routes>
    </RouterProvider>
  );
}

export default App;
