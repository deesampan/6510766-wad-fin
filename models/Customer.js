import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date_of_birth: { type: Date, required: false },
  member_number: { type: Number, required: false },
  interests : {type: String, require:false}
});

const Customer = mongoose.models.customer || mongoose.model("customer", customerSchema);

export default Customer;
