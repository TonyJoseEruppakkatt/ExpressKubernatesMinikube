
const express = require("express");

const app = express();

const PORT = 3000;

// Home page
app.get("/", (req, res) => {
    res.send(`
        <h1>Welcome to Kubernetes!</h1>
        <h2>Express Application</h2>
        <p>My first Kubernetes deployment is successful!</p>
    `);
});

// Health check
app.get("/health", (req, res) => {
    res.json({
        status: "healthy",
        message: "Express application is running"
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
