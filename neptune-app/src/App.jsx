import { Routes, Route, useNavigate } from 'react-router-dom'
import { RouterProvider } from "react-aria-components";
import "./App.css";
import HomePage from "./Pages/Home";
import Header from './components/PageLayout/Header';

function App() {
  let navigate = useNavigate()

  return (
    <RouterProvider navigate={navigate}>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </RouterProvider>
  );
}

export default App;
