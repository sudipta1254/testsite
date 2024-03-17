import express from "express";
import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// const express = require("express");
// const dotenv = require("dotenv").config();
// const path = require("path");


const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(__dirname+"/index.html");
});

app.get("/updates", (req, res) => {
    res.json({ updates: "New updates coming soon..."});
});

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}` );
})
