import { Request, Response } from "express";
import { TravelsModel } from "../../data/models/travels.model";

export class TravelsController {

  getTravels = async (req: Request, res: Response) => {
    const travels = await TravelsModel.find();
    
    res.send(travels);
  }

}