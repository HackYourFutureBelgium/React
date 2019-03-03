const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
app.use(cors());

// localhost:4000/api/pages/about
app.get(`/api/pages/:page`, (req, res) => {
  const fileName = `data/${req.params.page}.md`;
  fs.readFile(fileName, "utf-8", (err, data) => {
    if (err) {
      res.send({ status: "error", message: err.toString() });
    } else {
      res.send({ status: "ok", page: data });
    }
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
