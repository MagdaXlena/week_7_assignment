import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();

const db = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
});

app.get('/', function(request, response) {
    response.json('Home route')
});

app.get("/portfolio", async function (request,response) {
    const portfolio = await db.query("SELECT * FROM crypto_data");
    response.json(portfolio.rows);
})

app.listen(8080, function() {
    console.log("You're running on port 8080")
});