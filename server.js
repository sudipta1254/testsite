import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// Serve static files (HTML, CSS, JS) from the 'public' directory
app.use(express.static('public'));

// Handle requests to the root URL
app.get('/', (req, res) => {
    // res.sendFile(__dirname+'public/index.html');
    res.json({message: "enw"});
});

app.get('/hm', (req, res) => {
    res.send('1');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
