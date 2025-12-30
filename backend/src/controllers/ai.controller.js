import fs from "fs";
import extractText from "../services/pdf.service.js";
import analyzeWithGemini from "../services/ai.service.js";

export const analyzeResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        error: "PDF required",
      });
    }
    console.log("FILE aa gyaa backend me :", req.file);

    const filePath = req.file.path;
    console.log("File Path :", filePath);

    // 1️ Extract text
    const resumeText = await extractText(filePath);

    console.log("Text Extracted...");

    // 2 AI analysis
    const analysis = await analyzeWithGemini(resumeText);

    console.log("Analyzed with gemini");

    // 3️⃣ Always delete file
    fs.unlinkSync(filePath);

    // 4️⃣ Response
    return res.json({
      success: true,
      analysis,
    });
  } catch (err) {
    console.error("ANALYZE ERROR:", err);

    // ensure delete even on error
    if (req.file?.path && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }

    // IMPORTANT: client-safe error
    return res.status(400).json({
      message: "abcd",
      success: false,
      error: err.message || "Resume analysis failed",
    });
  }
};
