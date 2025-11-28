


export const generateTonePoints = (score) => {
  const out = [];
  if (score < 50) {
    out.push("Tone is polite but lacks strong impact.");
    out.push("Use active verbs: launched, improved, reduced.");
  } else {
    out.push("Professional tone with clear outcomes.");
  }
  out.push("Avoid filler phrases like 'responsible for'.");
  if (score < 40) out.push("Shorten long sentences for clarity.");
  return out;
};

export const generateContentPoints = (score) => {
  const out = [];
  if (score < 40) {
    out.push("Missing measurable results for several roles.");
    out.push("Include company/product context (scale, users).");
  } else {
    out.push("Good achievements, add more numbers where possible.");
  }
  out.push("Match keywords from job description.");
  if (score < 30) out.push("Add a short summary highlighting impact.");
  return out;
};

export const generateStructurePoints = (score) => {
  const out = ["Sections are well separated."];
  if (score < 60) out.push("Consider moving skills higher for quick scan.");
  out.push("Use consistent date formatting.");
  if (score < 50) out.push("Reduce dense paragraphs; use bullets.");
  return out;
};

export const generateSkillsPoints = (score) => {
  const out = [];
  if (score < 50) {
    out.push("Top skills list missing — add 6–8 core skills.");
    out.push("Separate tools from languages/frameworks.");
  } else {
    out.push("Skills list looks relevant; consider priorities.");
  }
  out.push("Mention proficiency level (e.g., 'Intermediate React').");
  return out;
};

export const generateAtsNotes = (overall) => {
  const notes = [];
  if (overall > 75) notes.push("Formatting is ATS-friendly.");
  else notes.push("Minor formatting issues may affect ATS parsing.");
  notes.push("Consider adding exact keyword matches from job description.");
  if (overall < 60) notes.push("No dedicated skills section detected.");
  return notes;
};

export const calculateScore = (base, variance = 8) => {
  return Math.max(10, Math.min(100, base + Math.floor((Math.random() - 0.5) * variance)));
};

export const calculateOverallScore = (scores) => {
  const { toneScore, contentScore, structureScore, skillsScore } = scores;
  return Math.round((toneScore + contentScore + structureScore + skillsScore) / 4);
};