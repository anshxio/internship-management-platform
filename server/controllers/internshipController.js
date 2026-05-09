const pool = require("../db/db");

const createInternship = async(req,res) =>{
    try{
        const {
        title,
        company,
        location,
        stipend,
        description,
    } = req.body;

    const newInternship = await pool.query(
        "INSERT INTO internships (title,company,location,stipend,description,recruiter_id) values ($1,$2,$3,$4,$5,$6) RETURNING *",
        [title,company,location,stipend,description,req.user.id]
    );
    res.status(201).json({
        success: true,
        internship: newInternship.rows[0],
    });
    }catch(err){
        console.error(err);
        res.status(500).json({
            message: "Server error",
        });
    }
};
const readInternships = async(req,res) =>{
    try{
        const internships = await pool.query("SELECT *FROM internships");
        res.status(200).json({
            success: true,
            internships: internships.rows,
        });
    }catch(err){
        console.error(err);
        res.status(500).json({
            message: "Server error",
        });
    }
};
const readSingleInternship = async(req,res) =>{
    try{
        const{id} = req.params;
        const internship = await pool.query("SELECT *FROM internships WHERE id = $1",[id]);

        if(internship.rows.length === 0){
            return res.status(404).json({
                message: "Internship not found",
            });
        }
         res.status(201).json({
        success: true,
        internship: internship.rows[0],
    });
    }catch(err){
        console.error(err.message);
        res.status(500).json({
            message: "Server error",
        });
    }
};
const updateInternship = async(req,res) =>{
    try{
        const {id} = req.params;
        const{title,company,location,stipend,description} = req.body;

        const internship = await pool.query("SELECT *FROM internships WHERE id = $1",[id]);

        if(internship.rows.length === 0){
            return res.status(404).json({
                message: "Internship not found",
            });
        }
        //owership check
        if(internship.rows[0].recruiter_id !== req.user.id){
            return res.status(403).json({
                message: "Unauthorized action",
            });
        }

        const updatedInternship = await pool.query("UPDATE internships SET title = $1,company =$2, location = $3, stipend = $4, description = $5 WHERE id = $6 RETURNING *",
        [title,company,location,stipend,description,id]
        );
         res.status(200).json({
         success: true,
        internship: updatedInternship.rows[0],
       });

    }catch(err){
        console.error(err);
        res.status(500).json({
            message: "Server error",
        });

    }
};
const deleteInternship = async(req,res) =>{
    try{
        const {id} = req.params;
        const{title,company,location,stipend,description} = req.body;

        const internship = await pool.query("SELECT *FROM internships WHERE id = $1",[id]);

        if(internship.rows.length === 0){
            return res.status(404).json({
                message: "Internship not found",
            });
        }
        //owership check
        if(internship.rows[0].recruiter_id !== req.user.id){
            return res.status(403).json({
                message: "Unauthorized action",
            });
        }

          await pool.query("DELETE FROM internships WHERE id = $1 RETURNING *",[id]
        );
         res.status(200).json({
         success: true,
         message: "Internship deleted successfully",
       });

    }catch(err){
        console.error(err);
        res.status(500).json({
            message: "Server error",
        });

    }
};
module.exports = {
    createInternship,
    readInternships,
    readSingleInternship,
    updateInternship,
    deleteInternship,
};