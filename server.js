var Db = require("./dboperations");
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", router);

var port = 3001;
app.listen(port);
console.log("Patient API is runnning at " + port);

router.route("/patients").post((request, response) => {
  let patient = { ...request.body };
  console.log(patient);
  Db.addPatientData(patient).then((data) => {
    response.status(201).json(data);
  });
});
