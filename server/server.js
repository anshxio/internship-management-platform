
const express = require('express');
const cors = require('cors');
const pool = require("./db/db");
const authRoutes = require("./routes/authRoutes");
const internshipRoutes = require("./routes/internshipRouter");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/internships", internshipRoutes);

app.get("/", async (req, res) =>{
    try{
        const result = await pool.query("SELECT NOW()");
        res.send(result.rows[0]);
    }catch(err){
        console.error(err);
        res.send("Database connection error");
    }
})

app.listen(5000, () =>{
    console.log("Server is running on port 5000");
});