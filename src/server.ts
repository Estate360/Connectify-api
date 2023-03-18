import "dotenv/config";
import mongoose from "mongoose";
import type { ConnectOptions } from "mongoose"; 
import app from "./middlewares/appMiddle";

const port = process.env.PORT || 5353;

//Database Connection
const DB = `${process.env.DATABASE}`;
const options: ConnectOptions = {
  retryWrites: true,
  w: "majority",
};
mongoose.set("strictQuery", false);
mongoose.connect(DB, options)
  .then(() => {
    console.log("DB connected successfully!");
  })
  .catch((error) => {
    console.log("Not connected to the database!!", error.stack);
  });

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
