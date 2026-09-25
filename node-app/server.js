// Load the externalized, environment-specific configuration values
require('dotenv').config();

const express = require('express');
const app = express();

// Fall back to a default parameter if the environment variable goes missing
const port = process.env.PORT || 3000;
const currentMode = process.env.ENV_MODE || 'Production';

// Root API Endpoint demonstrating successful deployment metadata configuration
app.get('/', (req, res) => {
    res.json({
        status: "SUCCESS",
        message: "Software application package is running smoothly!",
        environment: currentMode,
        timestamp: new Date().toISOString()
    });
});

const server = app.listen(port, () => {
    console.log(`🚀 [Node.js Engine Active]`);
    console.log(`🌐 Serving traffic dynamically on network port: ${port}`);
    console.log(`⚙️  Active Environment Strategy Profile: ${currentMode}`);
});

// Graceful exit routine wrapper for automated validation pipeline tools
if (process.env.TEST_RUN === 'true') {
    setTimeout(() => {
        console.log("🔒 Simulated verification scan successful. Closing server loop...");
        server.close();
        process.exit(0);
    }, 2000);
}


