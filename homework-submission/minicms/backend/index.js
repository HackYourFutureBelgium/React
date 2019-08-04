const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
app.use(cors());

app.get("/api/pages/:page", (req, res) => {
  const fileName = `data/${req.params.page}.md`;
  fs.readFile(fileName, "utf-8", (err, data) => {
    if (err) {
      res.send({
        status: "err",
        error: err.toString()
      });
    } else {
      const lines = data.split("\n");
      const title = lines[0].substring(2);
      const body = lines
        .slice(1)
        .join("\n")
        .trim();

      //console.log("Lines", lines);
      //console.log("title", title);
      //console.log("body", body);
      const page = { title, body };
      res.send({ status: "ok", page: page });
    }
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
