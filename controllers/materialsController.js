const { S3Client } = require("@aws-sdk/client-s3");
const { Upload } = require("@aws-sdk/lib-storage");
const Material = require("../models/Material");
const dotenv = require("dotenv");

dotenv.config();

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

// Get all materials
exports.getMaterials = async (req, res) => {
  try {
    const materials = await Material.find().select("-__v");
    res.json(materials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get material by ID
exports.getMaterialById = async (req, res) => {
  try {
    const material = await Material.findById(req.params.id).select("-__v");
    if (!material)
      return res.status(404).json({ message: "Material not found" });
    res.json(material);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new material
exports.createMaterial = async (req, res) => {
  const { name, technology, colors, pricePerGram } = req.body;
  const imageUrl = req.file ? req.file.location : "";
  console.log("req.file", req.file);
  console.log("imageUrl", imageUrl);
  const material = new Material({
    name,
    technology,
    colors,
    pricePerGram,
    imageUrl,
  });

  try {
    const newMaterial = await material.save();
    res.status(201).json(newMaterial);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update material
exports.updateMaterial = async (req, res) => {
  const { name, technology, colors, pricePerGram } = req.body;

  try {
    const material = await Material.findById(req.params.id);
    if (!material)
      return res.status(404).json({ message: "Material not found" });

    material.name = name || material.name;
    material.technology = technology || material.technology;
    material.colors = colors || material.colors;
    material.pricePerGram = pricePerGram || material.pricePerGram;
    if (req.file) material.imageUrl = req.file.location;

    const updatedMaterial = await material.save();
    res.json(updatedMaterial);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete material
exports.deleteMaterial = async (req, res) => {
  try {
    const material = await Material.findById(req.params.id);
    if (!material)
      return res.status(404).json({ message: "Material not found" });
    await material.deleteOne();
    res.json({ message: "Material removed" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
