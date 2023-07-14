const express = require("express");
var cors = require("cors");
const fs = require('fs');
const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors({
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // For legacy browser support
}));
app.get("/api", (req, res) => {
  let data = fs.readFileSync('./db.json','utf-8');
  // console.log(data);
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
