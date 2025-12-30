import fs from "fs";
import pdf from "pdf-parse";

const extractText = async (filePath) => {
  if (!filePath || !fs.existsSync(filePath)) {
    throw new Error("PDF file not found");
  }

  const buffer = fs.readFileSync(filePath);
  const data = await pdf(buffer);

  const text = data.text?.trim() || "";

 

  console.log("TEXT LENGTH:", text.length);

  //  STRICT scanned check
  if (text.length < 1) {
    throw new Error("Scanned PDF detected. Please upload a text-based resume.");
  }

  return text;
};

export default extractText;
