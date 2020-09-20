const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  console.log("Hello World");
});

app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));
