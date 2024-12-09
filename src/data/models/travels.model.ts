import mongoose from "mongoose";
const travelsSchema = new mongoose.Schema({
  creationDate: {
    type: Date,
    default: Date.now,
    immutable: true,
  },
  locationName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ["Viajes", "Por Viajar"], 
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
