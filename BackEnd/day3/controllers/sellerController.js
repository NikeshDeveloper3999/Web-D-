const express = require("express");
const sellerModel = require("../models/sellerModel");
const { configDotenv } = require("dotenv");


const sellerService = require("../services/sellerServices");
const generateToken = require("../utility/createToken");
const { generateOTP } = require("../utility/generateOtp");

configDotenv();

/* ================= REGISTER SELLER ================= */
const registerSeller = async (req, res) => {
  try {
    const inputData = req.body;

    if (Object.keys(inputData).length === 0) {
      return res.json({
        status_code: 404,
        message: "Provide Proper Data for Registration",
      });
    }

    const checkData = await sellerService.findSeller({
      email: inputData.email,
      mobile: inputData.mobile_number,
      gst: inputData.gst_number,
    });

    if (checkData) {
      return res.json({
        status_code: 404,
        message: "Seller Exists Already",
      });
    }

    const storeDb = await sellerModel.create(inputData);

    return res.json({
      status_code: 200,
      message: "Seller Registered Successfully",
      data: storeDb,
    });
  } catch (err) {
    console.log(err);
    return res.json({
      status_code: 404,
      message: "Seller Registration Failed",
    });
  }
};

/* ================= SELLER LOGIN ================= */
const loginSeller = async (req, res) => {
  try {
    const inputData = req.body;

    if (Object.keys(inputData).length === 0) {
      return res.status(404).json({ message: "Provide Data to Login" });
    }

    const checkData = await sellerModel.findOne({
      email: inputData.email,
    });

    if (!checkData) {
      return res.status(404).json({ message: "Seller Account Not Found" });
    }

    if (checkData.password === inputData.password) {
      const token = generateToken.generateToken(
        checkData.email,
        checkData._id
      );

      return res.status(200).json({
        message: "Seller Logged In Successfully",
        token: token,
      });
    } else {
      return res.status(404).json({ message: "Invalid Credentials" });
    }
  } catch (err) {
    return res.json({
      status_code: 404,
      message: "Internal Server Error",
    });
  }
};

/* ================= SELLER LOGIN WITH OTP ================= */
const loginSellerWithOtp = async (req, res) => {
  try {
    const inputData = req.body;

    if (Object.keys(inputData).length === 0) {
      return res.status(404).json({ message: "Provide Data to Login" });
    }

    const checkData = await sellerModel.findOne({
      mobile_number: inputData.mobile_number,
    });

    if (!checkData) {
      return res.status(404).json({ message: "Seller Account Not Found" });
    }

    const otp = generateOTP();
    console.log("Seller OTP:", otp);

    return res.status(200).json({
      message: "OTP sent successfully",
      data: otp,
    });
  } catch (err) {
    return res.json({
      status_code: 404,
      message: "Internal Server Error",
    });
  }
};

/* ================= UPDATE SELLER ================= */
const updateSeller = async (req, res) => {
  try {
    const id = req.params.id;

    if (Object.keys(req.body).length === 0) {
      return res.status(404).json({ message: "Provide Data to Update" });
    }

    const updateSeller = await sellerModel.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    );

    return res.status(200).json({
      message: "Seller Updated Successfully",
      data: updateSeller,
    });
  } catch (err) {
    return res.json({
      status_code: 404,
      message: "Update Failed",
    });
  }
};

/* ================= DELETE SELLER ================= */
const deleteSeller = async (req, res) => {
  try {
    const id = req.params.id;

    const deleteSeller = await sellerModel.findByIdAndDelete(id);

    if (deleteSeller) {
      return res.json({
        status_code: 200,
        message: "Seller Deleted Successfully",
      });
    } else {
      return res.json({
        status_code: 404,
        message: "Seller Not Found",
      });
    }
  } catch (err) {
    return res.json({
      status_code: 404,
      message: "Delete Failed",
    });
  }
};


const getAllProductsOfASeller = async (req,res) => {
    try {
        const id = req.params.id
        console.log('id', id)
        const getData = await sellerService.getAllProducts(id)
        console.log('getData', getData)
        res.send(getData)

    } catch(err) {
        console.log(err);
        return res.json({
          status_code: 404,
          message: "Internal Server Error",
        });
    }
}



module.exports = {
  registerSeller,
  loginSeller,
  loginSellerWithOtp,
  updateSeller,
  deleteSeller,
getAllProductsOfASeller
};
