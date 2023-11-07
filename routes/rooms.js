const express = require("express");
const {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
  updateRoomAvailability,
} = require("../controllers/room.js");
const { verifyAdmin } = require("../utils/verifyToken.js");

const router = express.Router();

// CREATE - Render form to create a room
router.get("/create", verifyAdmin, (req, res) => {
  res.render("create-room", { hotelId: req.params.hotelid });
});

// POST - Handle room creation
router.post("/:hotelid", verifyAdmin, createRoom);

// UPDATE - Render form to edit a room
router.get("/:id/edit", verifyAdmin, (req, res) => {
  res.render("edit-room", { roomId: req.params.id });
});

// PUT - Handle room update
router.put("/:id", verifyAdmin, updateRoom);

// PUT - Handle room availability update
router.put("/availability/:id", updateRoomAvailability);

// DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

// GET
router.get("/:id", getRoom);

// GET ALL
router.get("/", getRooms);

module.exports = router;
