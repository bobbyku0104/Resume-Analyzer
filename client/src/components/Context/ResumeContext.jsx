import { createContext, useState } from "react";

export const ResumeContext = createContext();

export function ResumeProvider({ children }) {
    const [file, setFile] = useState(null);
    const [numPages, setNumPages] = useState(null);

    const handleFileUpload = (e) => {
  const selectedFile = e.target.files[0];
  setFile(selectedFile); // Ye zaruri hai
};


    return (
        <ResumeContext.Provider value={{ file, setFile, numPages, setNumPages }}>
            {children}
        </ResumeContext.Provider>
    );
}
