import React from "react";

export default function PdfUpload({ file, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-semibold text-gray-700">Upload Resume (PDF)</label>

      <div className="relative cursor-pointer">
        <input
          type="file"
          accept="application/pdf"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          onChange={onChange}
        />

        <div className="p-4 border-2 border-dashed border-gray-300 rounded-2xl hover:border-blue-400 hover:bg-blue-50/50 bg-white/50 text-center">
          <svg className="w-8 h-8 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>

          <p className="text-gray-600 font-medium">
            {file ? file.name : "Click to upload PDF resume"}
          </p>

          <p className="text-sm text-gray-500 mt-1">PDF only (Max 5MB)</p>
        </div>
      </div>
    </div>
  );
}


