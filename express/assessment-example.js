/* 
You are building a small API for a job application tracker. Implement an Express.js endpoint GET /applications/status/:status that returns all job applications from a MongoDB collection that match the given status (e.g., “applied”, “interview”, “offer”, “rejected”).

Requirements:
- Use Node.js + Express.
- Assume a Mongoose model Application with fields { company, role, status }.
- Return the results as JSON.
- If no applications are found, return an empty array.
- Ensure errors are handled gracefully with a 500 response and a descriptive message.
*/
const express = require("express");
const router = express.Router();
const Application = require("../app-model")

router.get("/applications/status/:status", async (req, res, next) => {
    const { status } = req.params;
    try {
        const foundApps = await Application.find({status: status });
        if (foundApps.length === 0) res.status(200).json([]);
        res.status(200).json(foundApps);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Server error. Please try again later.",
        });
    }
})

module.exports = router;