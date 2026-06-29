// import React, { useContext } from "react";
// import { ResumeContext } from "../Context/ResumeContext";

// export default function PdfUpload() {
//   const { file, setFile } = useContext(ResumeContext);

//   const handleFile = (e) => {
//     const selected = e.target.files[0];
//     if (selected) {
//       setFile(selected); 
//     }
//   };

//   return (
//     <div className="flex flex-col gap-2">
//       <label className="font-semibold text-gray-700">Upload Resume (PDF)</label>

//       <div className="relative cursor-pointer">
//         <input
//           type="file"
//           accept="application/pdf"
//           className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//           onChange={handleFile}  
//         />

//         <div className="p-4 border-2 border-dashed border-gray-300 rounded-2xl hover:border-blue-400 hover:bg-blue-50/50 bg-white/50 text-center">
//           <p className="text-gray-600 font-medium">
//             {file ? file.name : "Click to upload PDF resume"}
//           </p>
//           <p className="text-sm text-gray-500 mt-1">PDF only (Max 5MB)</p>
//         </div>
//       </div>
//     </div>
//   );
// }









import React, { useContext, useState } from "react";
import { ResumeContext } from "../Context/ResumeContext";

export default function PdfUpload() {
  const { file, setFile } = useContext(ResumeContext);
  const [error, setError] = useState("");

  const MAX_SIZE = 5 * 1024 * 1024; // 5MB

  const handleFile = (e) => {
    const selected = e.target.files[0];

    if (!selected) return;

    //  only PDF
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

    // ✅ valid file
    setError("");
    setFile(selected);
  };

  const removeFile = () => {
    setFile(null);
    setError("");
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="font-semibold text-gray-700">Upload Resume (PDF)</label>

      <div className="relative cursor-pointer">
        <input
          type="file"
          accept="application/pdf"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          onChange={handleFile}
        />

        <div
          className={`p-4 border-2 border-dashed rounded-2xl text-center transition
            ${
              error
                ? "border-red-400 bg-red-50"
                : "border-gray-300 hover:border-blue-400 hover:bg-blue-50/50 bg-white/50"
            }
          `}
        >
          <p className="text-gray-700 font-medium">
            {file ? file.name : "Click to upload PDF resume"}
          </p>
          <p className="text-sm text-gray-500 mt-1">PDF only • Max 5MB</p>
        </div>
      </div>

      {/* Error message */}
      {error && <p className="text-sm text-red-600 font-medium">{error}</p>}

      {/* Remove file */}
      {file && (
        <button
          type="button"
          onClick={removeFile}
          className="self-start mt-2 text-sm text-red-600 hover:underline"
        >
          Remove file
        </button>
      )}
    </div>
  );
}


