

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UiForm from "./components/Form/UiForm";
import Login from "./components/Login";

  // ← Correct path

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Form Page */}
        <Route path="/form" element={<UiForm />} />

         <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
}


