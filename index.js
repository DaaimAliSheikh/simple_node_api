// index.js
const express = require("express");
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Simple GET route
app.get("/properties", async (req, res) => {
  const { data } = await axios.get(
    "https://search-listings-production.up.railway.app/v1/properties",
    {
      headers: {
        "X-API-Key": "reelly-682aebad-HMGFdRATSsyggYB7YgAvpwjuec5tGqlz",
        "Content-Type": "application/json",
      },
    }
  );
  res.json({ data });
});

// Root route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Simple Express API",
    endpoints: ["/properties"],
  });
});

// For local development
const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Export for Vercel
module.exports = app;
