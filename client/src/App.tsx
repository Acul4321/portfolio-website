import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/index";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
