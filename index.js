const PORT = 8080;

require("http")
  .Server((req, res) => res.end("Hallo!"))
  .listen(process.env.PORT || PORT);
