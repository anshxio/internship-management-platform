const jwt = require("jsonwebtoken");

const authMiddleware = ((req, res, next) => {
    try{
        //Get token from the header
        const token = req.header("token");
        if(!token){
            return res.status(401).json({
                message: "Access denied, no token provided",
            });
        }
        // Then verify the token
        const verified = jwt.verify(
            token,
            process.env.JWT_SECRET,
        );
        //after verification send to next route 
        req.user = verified;
        next();
    }catch(err){
        res.status(401).json({
            message: "Invalid token",
        });
    }
});
module.exports = authMiddleware;