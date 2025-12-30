import { createContext, useState } from "react";

export const ResumeContext = createContext();

export function ResumeProvider({ children }) {
  const [file, setFile] = useState(null);
  const [analysis, setAnalysis] = useState();
 

  return (
    <ResumeContext.Provider
      value={{
        file,
        setFile,
        analysis, 
        setAnalysis,
        
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
}
