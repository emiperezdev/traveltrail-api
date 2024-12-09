import { Document } from "mongoose";

export interface ITravel{
  locationName: string;
  description: string;
  type: string;
  lat: number;
  lng: number;
  isEmailSent: boolean;
}

export interface ITravelDocument extends Document, ITravel {
  
}