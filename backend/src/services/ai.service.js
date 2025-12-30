const analyzeWithGemini = async (resumeText) => {
  const prompt = `
You are a strict ATS resume analyzer.

RULES:
- Be fully deterministic.
- Same resume MUST always give the SAME score.
- Score must be between 0 and 99 (never 100).
- Do NOT guess or add information.
- Penalize missing or weak sections.
- Keep output short (key points only).

SCORING:
Skills (30)
Experience (25)
Projects (20)
Structure (15)
ATS keywords (10)

OUTPUT:
Return ONLY valid JSON.

FORMAT:
{
  "atsScore": number,
  "strengths": [],
  "weaknesses": [],
  "missingSkills": [],
  "suggestions": []
}

Resume:
${resumeText}
`;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],

        
        generationConfig: {
          temperature: 0,
          topP: 0,
          topK: 1,
        },
      }),

    }
  );

  console.log("api called");

  const data = await response.json();
  console.log(data)
  let jsonText = data?.candidates[0]?.content?.parts[0]?.text;

  jsonText = jsonText.replace(/```json|```/g, "").trim();

  return JSON.parse(jsonText);
};

export default analyzeWithGemini;











