import "dotenv/config";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = process.env.PORT || 3000;

// Serve static files (HTML, CSS, JS) from the 'views' directory
app.use(express.static('public'));

// Handle requests to the root URL
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/idx.html');
});
app.get('/e', (req, res) => {
    res.send({ message: "New Express App" });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});