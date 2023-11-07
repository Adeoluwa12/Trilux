const express = require("express");

const {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getHotel,
  getHotelRooms,
  getHotels,
  updateHotel,
} = require("../controllers/hotel.js");
const Hotel = require("../models/Hotel.js");
const { verifyAdmin } = require("../utils/verifyToken.js");
const router = express.Router();

// CREATE - Render form to create a hotel
router.get("/create", verifyAdmin, (req, res) => {
  res.render("create-hotel");
});

// POST - Handle hotel creation
router.post("/", verifyAdmin, createHotel);

// UPDATE - Render form to edit a hotel
router.get("/:id/edit", verifyAdmin, (req, res) => {
  res.render("edit-hotel", { hotelId: req.params.id });
});

// PUT - Handle hotel update
router.put("/:id", verifyAdmin, updateHotel);

// DELETE
router.delete("/:id", verifyAdmin, deleteHotel);

// GET
router.get("/find/:id", getHotel);

// GET ALL
router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);

module.exports = router;
