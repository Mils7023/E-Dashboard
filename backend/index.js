const express = require("express");
const { connectDB } = require("./db/config");
const cors = require("cors");
const User = require("./db/User");

const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.post("/register", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  res.send(result);
});

app.post("/login", async (req, res) => {
  if (req.body.email && req.body.password) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      res.send(user);
    } else {
      res.send({ result: "User not found" });
    }
  } else {
    res.send({ result: "User not found" });
  }
});

app.listen(3001);
