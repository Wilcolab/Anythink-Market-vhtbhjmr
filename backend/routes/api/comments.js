const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;



// Hey GitHub Copilot


router.get("/", async (req, res) => {
});

// add another endpoint for deleting a comment

/**
 * @route DELETE /api/comments/:id
 */


router.delete("/:id", async (req, res) => {
    try {
        const comment = await Comment.findByIdAndRemove(req.params.id);
        if (!comment) {
            return res.status(404).json({ message: "Comment not found" });
        }
        res.json(comment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
    
    