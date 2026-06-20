import React, { useContext, useState } from "react";
import { ResumeContext } from "../Context/ResumeContext";

export default function PdfUpload() {
  const { file, setFile } = useContext(ResumeContext);
  const [error, setError] = useState("");

  const MAX_SIZE = 5 * 1024 * 1024; // 5MB

  const handleFile = (e) => {
    const selected = e.target.files[0];

    if (!selected) return;

    // only PDF
    if (selected.type !== "application/pdf") {
      setError("Only PDF files are allowed");
      setFile(null);
      return;
    }

    // size limit
    if (selected.size > MAX_SIZE) {
      setError("File size must be less than 5MB");
      setFile(null);
      return;
    }

    setError("");
    setFile(selected);
  };

  const removeFile = () => {
    setFile(null);
    setError("");
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">
        Upload Resume (PDF)
      </label>

      <div className="relative cursor-pointer">
        <input
          type="file"
          accept="application/pdf"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
          onChange={handleFile}
        />

        <div
          className={`p-4 border-2 border-dashed rounded-2xl text-center transition duration-300
            ${
              error
                ? "border-red-500/40 bg-red-950/10 text-red-400"
                : "border-white/10 hover:border-indigo-500/40 bg-[#080b16]/60 hover:bg-[#0d1226]/40 text-gray-300"
            }
          `}
        >
          <p className={`font-semibold text-sm transition-colors ${file ? 'text-indigo-400' : 'text-gray-300'}`}>
            {file ? file.name : "Click to upload PDF resume"}
          </p>
          <p className="text-[11px] text-gray-500 mt-1">PDF only • Max 5MB</p>
        </div>
      </div>

      {/* Error message */}
      {error && <p className="text-xs text-red-400 font-medium mt-1">{error}</p>}

      {/* Remove file */}
      {file && (
        <button
          type="button"
          onClick={removeFile}
          className="self-start mt-1 text-xs text-red-400 hover:underline cursor-pointer z-30"
        >
          Remove file
        </button>
      )}
    </div>
  );
}
