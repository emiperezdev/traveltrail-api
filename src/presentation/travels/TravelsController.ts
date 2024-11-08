import { Request, Response } from "express";
import { TravelsModel } from "../../data/models/travels.model";

export class TravelsController {

  getTravels = async (req: Request, res: Response) => {
    const travels = await TravelsModel.find();
    
    res.send(travels);
  }

  getTravelById = async (req: Request, res: Response) => {
    const id = req.params.id;

    const foundTravel = await TravelsModel.findById(id);
    if (!foundTravel) {
      res.status(404).send(`No travel found with the given id: ` + id);
      return;
    }

    res.send(foundTravel);
  } 

}