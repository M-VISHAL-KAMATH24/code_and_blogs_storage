import express from "express";
import Code from "../models/Code.js";

const router = express.Router();

/**
 * @route   POST /api/codes
 * @desc    Add new code
 */
router.post("/", async (req, res) => {
  try {
    const { title, description, code } = req.body;

    if (!title || !description || !code) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newCode = await Code.create({
      title,
      description,
      code,
    });

    res.status(201).json(newCode);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/**
 * @route   GET /api/codes
 * @desc    Get all codes
 */
router.get("/", async (req, res) => {
  try {
    const codes = await Code.find().sort({ createdAt: -1 });
    res.json(codes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


/**
 * @route   DELETE /api/codes/:id
 * @desc    Delete a code
 */
router.delete("/:id", async (req, res) => {
  try {
    const code = await Code.findById(req.params.id);

    if (!code) {
      return res.status(404).json({ message: "Code not found" });
    }

    await code.deleteOne();
    res.json({ message: "Code deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/**
 * @route   PUT /api/codes/:id
 * @desc    Update a code
 */
router.put("/:id", async (req, res) => {
  try {
    const { title, description, code } = req.body;

    const updatedCode = await Code.findByIdAndUpdate(
      req.params.id,
      { title, description, code },
      { new: true }
    );

    if (!updatedCode) {
      return res.status(404).json({ message: "Code not found" });
    }

    res.json(updatedCode);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
/**
 * @route   GET /api/codes/:id
 * @desc    Get single code by ID
 */
router.get("/:id", async (req, res) => {
  try {
    const code = await Code.findById(req.params.id);

    if (!code) {
      return res.status(404).json({ message: "Code not found" });
    }

    res.json(code);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


export default router;
