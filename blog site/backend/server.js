const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config({ path: ".env" });

//bring route
const blogRoutes = require("./routes/blog");
const authRoutes = require("./routes/auth");
//app
const app = express();

//database
mongoose
  .connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected db");
  });

//middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());

//cors
if (process.env.NODE_ENV === "developement") {
  app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
}

//routes moddleware
app.use("/api", blogRoutes);
app.use("/api", authRoutes);

//port
const port = process.env.port || 8000;
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
