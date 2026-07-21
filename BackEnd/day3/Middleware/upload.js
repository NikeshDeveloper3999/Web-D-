

const multer = require("multer");
const path = require("path");
const fs = require("fs");

// ensure upload directory exists

const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

// storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let folder = "uploads/others";

    if (file.fieldname === "profile_image") {
      folder = "uploads/profile";
    }

    if (file.fieldname === "aadhar_file") {
      folder = "uploads/documents";
    }

    ensureDir(folder);
    cb(null, folder);
  },

  filename: (req, file, cb) => {
    const uniqueName =
      file.fieldname +
      "-" +
      Date.now() +
      "-" +
      Math.round(Math.random() * 1e9);

    cb(null, uniqueName + path.extname(file.originalname));
  },
});

// file type validation
const fileFilter = (req, file, cb) => {
  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "application/pdf",
  ];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(
      new Error("Only JPG, PNG and PDF files are allowed"),
      false
    );
  }
};

// multer instance
const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 2 * 1024 * 1024, // 2MB
  },
});

module.exports = upload;
