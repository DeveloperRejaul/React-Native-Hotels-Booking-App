const app = require("./app.js");
const config = require("./src/config/config.js");
const port = config.app.port;

app.get("/", (req, res) =>
  res.send({ message: "I'm ok, Welcome to my world" })
);
// app.use((req, res, next) => res.send({ message: "bad url" }));
app.use((err, req, res, next) => res.send({ message: "other error" }));

app.listen(port, () => console.log(`app listening on port ${port}!`));
