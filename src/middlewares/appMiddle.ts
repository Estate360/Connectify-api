import express, { Application, NextFunction, Response, Request } from "express";
import mongoSanitize from "express-mongo-sanitize";
import morgan from "morgan";
import cors from "cors";
import "dotenv/config";

const app: Application = express();

interface CustomRequest extends Request {
  requestTime?: any;
}
//Global Middleware
app.use(cors()); /*allow cross-origin request*/
app.use(express.json()); /*Use JSON parser middleware*/
app.use(mongoSanitize()); /*Data sanitization against NoSQL query injection*/

/*middleware for updating data.*/
app.use(
  express.urlencoded({
    extended: true,
    limit: "10kb",
  })
);

/*Development login*/
if (process.env.NODE_ENV === "development") {
  console.log(process.env.NODE_ENV);
  app.use(morgan("dev"));
}

/*Text middleware*/
app.use((req: CustomRequest, res: Response, next: NextFunction) => {
  req.requestTime = new Date().toISOString();
  console.log(req.requestTime);
  next();
});

export default app;
