import "reflect-metadata"; //10.11k (gzipped: 3k)
import express, { response } from "express";

import {router} from "./routes";

import "./database";

//@types/express
const app = express();

app.use(express.json());

app.use(router);

app.listen(3000, () => console.log("Server is running"));