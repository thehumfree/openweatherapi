const axios = require("axios");
const Express = require("express");
const bodyParser = require("body-parser");
const app = Express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", async (req, res) => {
  const { country } = req.body;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=05d80701b84670b2966ab2bb2d33f3eb`;
  const checkWeather = await axios.get(url);
  res.json({
    message: `${country} temperature is ${checkWeather.data.main.temp}`,
  });
});
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
