const mongoose = require("mongoose");

async function connectDB() {
  try {
    mongoose.connect(
      "mongodb+srv://milannariya095:i9kmlWZcfTbiPxY6@cluster0.uoqovuj.mongodb.net/test",
      {
        useNewUrlParser: true,
      }
    );
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });

    connection.on("error", (err) => {
      console.log("MongoDB connection error", err);
      process.exit();
    });
  } catch (error) {
    console.log("Something goes wrong!");
    console.log(error);
  }
}

module.exports = { connectDB };
