// Import libraries:
const express = require("express"),
  mongoose = require("mongoose"),
  path = require("path"),
  cors = require("cors"),
  seedDB = require("./seeds");

// Important variables:
const app = express();

//Mongoose config:
mongoose.set("useUnifiedTopology", true);
mongoose.set("useNewUrlParser", true);

// Connection to database:
mongoose.connect(
  `${process.env.NODEJS_MONGODB_SCHEME}://${process.env.NODEJS_MONGODB_USERNAME}:${process.env.NODEJS_MONGODB_PASSWORD}@${process.env.NODEJS_MONGODB_SERVICE_PORT}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
// Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
// by default, you need to set it to false.
mongoose.set("useFindAndModify", false);

// Seed database:
seedDB();

// Route variables:
const indexRoutes = require("./routes/index"),
  textRoutes = require("./routes/text");

// Express config:
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", indexRoutes);
app.use("/texts", textRoutes);

app.listen(process.env.PORT || 9000, () => {
  console.log("Server up on port: " + (process.env.PORT || 9000));
});

module.exports = app;
