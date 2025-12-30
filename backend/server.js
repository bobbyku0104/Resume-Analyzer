import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";

//  warnings ignore
process.on("warning", (warning) => {
  if (
    warning.name === "MetadataLookupWarning" ||
    warning.message.includes("TT:")
  ) {
    return;
  }
  console.warn(warning);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
