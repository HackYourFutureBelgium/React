const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.get('/api/list', function (request, response) {
    return response.status(200).send([
      {
        id: 1,
        description: "Get out of bed",
        deadline: "2019-09-11",
        done: true
      },
      {
        id: 2,
        description: "Brush teeth",
        deadline: "2019-09-10",
        done: false
      },
      {
        id: 3,
        description: "Eat breakfast",
        deadline: "2019-09-09",
        done: false
      }
    ]);
});

app.listen(3001, function () {
    console.log('Running my server in 3001');
});
