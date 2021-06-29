var express = require("express");
var router = express.Router();
var WeatherModel = require("./WeatherModel");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("Weather path hit");
});
router.get("/get-all-location", async function (req, res) {
  try {
    let getAllLocation = await WeatherModel.find({});
    res.json({ payload: getAllLocation });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});
router.post("/create-location", async function (req, res) {
  try {
    let createdLocation = new WeatherModel({
      city: req.body.city,
      country: req.body.country,
    });
    let savedLocation = await createdLocation.save();
    res.json({
      payload: savedLocation,
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});
router.delete("/delete-by-id/:id", async function (req, res) {
  try {
    let deleted = await WeatherModel.findByIdAndRemove(req.params.id);
    res.json({
      payload: deleted,
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});
module.exports = router;