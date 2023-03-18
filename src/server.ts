import "dotenv/config";
import app from "./middlewares/appMiddle";

const port = process.env.PORT || 5353;

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
