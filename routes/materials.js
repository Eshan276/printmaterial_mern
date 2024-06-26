const express = require("express");
const router = express.Router();
const materialsController = require("../controllers/materialsController");
const upload = require("../middleware/upload");

router.get("/", materialsController.getMaterials);
router.get("/:id", materialsController.getMaterialById);
router.post("/", upload.single("image"), materialsController.createMaterial);
router.put("/:id", upload.single("image"), materialsController.updateMaterial);
router.delete("/:id", materialsController.deleteMaterial);

module.exports = router;
