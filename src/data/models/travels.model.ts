import mongoose from "mongoose";
const travelsSchema = new mongoose.Schema({
  creationDate: {
    type: Date,
    default: Date.now,
    immutable: true,
  },
  username: {
    type: String,
    required: true,
  },
  locationName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  lat: {
    type: Number,
    required: true,
  },
  lng: {
    type: Number,
    required: true,
  },
  isEmailSent: {
    type: Boolean,
    default: false,
  },
});

const TravelsModel = mongoose.model("Travels", travelsSchema);

export { TravelsModel };
