const express = require("express");
const router = express.Router();

const {
  registerSeller,
  loginSeller,
  loginSellerWithOtp,
  updateSeller,
  deleteSeller,
  getAllProductsOfASeller
} = require("../controllers/sellerController");


router.post("/register-seller", registerSeller);
router.post("/login", loginSeller);
router.post("/login-otp", loginSellerWithOtp);
router.put("/update/:id", updateSeller);
router.post("/delete/:id", deleteSeller);
router.post('/get-all-products/:id',getAllProductsOfASeller)


module.exports = router;
