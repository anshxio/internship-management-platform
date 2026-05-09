const express = require('express');
const router = express.Router();

const {registerUser,loginUser} = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/Verify", authMiddleware, (req,res)=>{
    res.json({
        success: true,
        message: "Token is valid",
        user: req.user, 
    });
});
module.exports = router;