const express = require('express');
const path = require('path');

// Init application
const app = express();

// Routes to serve static files
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const pages = ['index', 'about', 'forecast', 'rmse', 'variable', 'login'];
pages.forEach(page => {
  app.get(`/${page}`, (req, res) => {
    res.sendFile(path.join(__dirname, `${page}.html`));
  });
});

const folders = ['css', 'js', 'common', 'src'];
folders.forEach(folder => {
  app.use(`/${folder}`, express.static(path.join(__dirname, `${folder}`)));
});

// Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on port ${PORT}`));