const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const { createInternship, readInternships, readSingleInternship,updateInternship, deleteInternship } = require("../controllers/internshipController");

router.post("/create", authMiddleware,createInternship);
router.get("/", readInternships);
router.get("/:id", readSingleInternship);
router.put("/:id", authMiddleware, updateInternship);
router.delete("/:id", authMiddleware, deleteInternship);

module.exports = router;