/**
 * Required External Modules
 */
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { itemRouter } from "./items/items.router";
 
 dotenv.config();
/**
 * App Variables
 */
 const PORT: number = parseInt(process.env.PORT as string, 10) || 3000;

 const app = express();
/**
 *  App Configuration
 */
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api/menu/items", itemRouter);
/**
 * Server Activation
 */

app.get("/", (req, res) => {
    res.send('Express on Vercel')
})



app.listen(PORT, () => {
console.log(`Express is listening at http://localhost:${PORT}`);
});