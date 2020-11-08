import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js";
import dotenv from "dotenv";
import config from "./config.js";

const app = express();
const environment = process.env.NODE_ENV;
if (environment !== 'production') {
  dotenv.config();
}
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/posts", postRoutes);

const CONNECTION_URL =
  "mongodb+srv://GaneshBandreddy:Ganesh@6666@cluster0.ktgrt.mongodb.net/test?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;
let mongodbConnectionUrl;
if(environment === 'production'){
  mongodbConnectionUrl = config.prod.MONGO_DB_CONNECTION_URL;
}
else{
  mongodbConnectionUrl = config.local.MONGO_DB_CONNECTION_URL;
}
mongoose
  .connect(config.prod.MONGO_DB_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`SERVER RUNNING ON PORT ${PORT}`));
  })
  .catch((error) => {
    console.log(`error: ${error.message}`);
  });

mongoose.set("useFindAndModify", false);
