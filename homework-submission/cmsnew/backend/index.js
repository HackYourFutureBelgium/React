const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const request = require("request");

const app = express();
app.use(cors());

const port = 4000;

const dateOfCurrency = 20050101;
const EXT_URL = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json&valcode=EUR&date=${dateOfCurrency}`;

request(EXT_URL, function(error, response, body) {
  fs.appendFile("./data/db/exchange_rate.json", body, err => {
    if (err) {
      return console.log(err);
    }
    return console.log("The file was saved!");
  });
});

app.get("/api/pages/:slug", (req, res) => {
  const fileName = `data/${req.params.slug}.md`;
  fs.readFile(fileName, "utf-8", (err, data) => {
    if (err) {
      res.send({ status: "error", error: err.toString() });
    } else {
      const lines = data.split("\n");
      const title = lines[0].substring(1);
      const body = lines
        .slice(1)
        .join("\n")
        .trim();
      console.log(body);
      const page = { title, body };
      res.send({ status: "OK", page });
    }
  });
});

app.listen(port, () => console.log(`This app listening on port ${port}!`));
