import "dotenv/config";
import express from "express";
import cors from "cors";
import {stickynotes, user} from "./services";
import {buscarUser, userExiste, validaUser} from "./middlewares";
import {stickynotesExiste, validaStickynotes} from "./middlewares";
import {pgHelper} from "./database/pg-helper";

const port = process.env.PORT || 8080;
const app = express();

app.use(express.json(), cors()); //routes);

pgHelper
  .connect()
  .then(() =>
    app.listen(port, () => console.log(`Server is running in port ${port}`))
  )
  .catch((err) => console.log(err));
