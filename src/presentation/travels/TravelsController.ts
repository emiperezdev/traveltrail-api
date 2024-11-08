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

  saveTravel = async (req: Request, res: Response) => {
    console.log('body', req.body);
    const { username, lat, lng, locationName, description } = req.body;
    const newTravel = await TravelsModel.create({
      username,
      description,
      lat,
      lng,
      locationName
    });
  
    res.status(201).send(newTravel);
  }

  updateTravelById = async (req: Request, res: Response) => {
    const id = req.params.id;
    const { username, description, lat, lng, locationName } = req.body;
  
    let currentTravel = await TravelsModel.findById(id);
    if (!currentTravel) {
      res.status(404).send(`No travel found with the given id: ${id}`);
      return;
    }
  
    currentTravel = await TravelsModel.findByIdAndUpdate(id, {
      username,
      description,
      lat,
      lng,
      locationName
    }, { new: true });
  
    res.send(currentTravel);
  }  

  deleteTravelById = async (req: Request, res: Response) => {
    const id = req.params.id;
    const currentTravel = await TravelsModel.findById(id);
    if (!currentTravel) {
      res.status(404).send(`No travel found with the given id: ${id}`);
      return;
    }
  
    await TravelsModel.findByIdAndDelete(id);
    res.send(currentTravel);
  }
  

}