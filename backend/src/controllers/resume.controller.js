import extractText from "../services/pdf.service.js";

export const analyzeResume = async (req, res) => {
  console.log(req.body);
  try {
    if (!req.file) {
      return res.status(400).json({ error: "PDF required" });
    }
    const resumeText = await extractText(req.file.path);

    // AI call here...

    res.json({
      success: true,
      analysis: result,
    });
  } catch (err) {
    console.error(err);
    res
      .status(400)
      .json({ message: "error in controller", error: err.message });
  }
};
