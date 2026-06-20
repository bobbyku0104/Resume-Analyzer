import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UiForm from "./components/Form/UiForm";
import Login from "./components/Login";
import { ResumeProvider } from "./components/Context/ResumeContext.jsx";
import Summery from "./components/ReviewPage/ResumeReviewPage.jsx";
import ResumeReviewPage from "./components/ReviewPage/ResumeReviewPage.jsx";
import ResumeScan from "./components/ResumeScan/ResumeScan.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <ResumeProvider>
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />

          {/* Form Page  */}
          <Route path="/form" element={<UiForm />} />

          {/* Login Page */}
          <Route path="/review" element={<ResumeReviewPage />} />
        </Routes>
      </ResumeProvider>
    </BrowserRouter>
  );
}
