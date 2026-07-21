const mongoose = require("mongoose");


//  new mongoose.Schema constructor banata ha 


const userSchema = new mongoose.Schema({
  full_name: { type: String },
  email: { type: String, unique: true, required: true },
  mobile_number: { type: String, unique: true, required: true },
  password: { type: String },
  aadhar_number: { type: Number, unique: true },
  aadhar_key_status: { type: Boolean, default: false },
  address: {
    address_line_1: { type: String },
    aadress_line_2: { type: String },
    area: { type: String },
    city: { type: String },
    state: { type: String },
    pincode: { type: String },
    nation: { type: String, default: "india" },
  },
  isActive: { type: String, enum: ["Active", "InActive"] },
});


module.exports = mongoose.model("user", userSchema);
