import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 9000;

// Serve static files (HTML, CSS, JS) from the 'public' directory
app.use(express.static('public'));

// Handle requests to the root URL
app.get('/', (req, res) => {
    res.send('Hello');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
