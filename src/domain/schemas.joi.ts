import Joi from "joi";

export const travelRequest = Joi.object({
  username: Joi.string().min(1).max(30).required(),
  locationName: Joi.string().min(1).max(50).required(),
  description: Joi.string().min(5).max(100).required(),
  lat: Joi.number().min(-90).max(90).required(),  
  lng: Joi.number().min(-180).max(180).required(), 
});