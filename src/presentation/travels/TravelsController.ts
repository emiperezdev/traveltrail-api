import { Request, Response } from "express";
import { TravelsModel } from "../../data/models/travels.model";

export class TravelsController {

  getTravels = async (req: Request, res: Response) => {
    console.log('>>> GET TRAVELS ENDPOINT <<<');
    const travels = await TravelsModel.find();
    
    res.send(travels);
  }

  getTravelById = async (req: Request, res: Response) => {
    console.log('>>> GET TRAVEL BY ID ENDPOINT <<<');
    const id = req.params.id;

    const foundTravel = await TravelsModel.findById(id);
    if (!foundTravel) {
      res.status(404).send(`No travel found with the given id: ` + id);
      return;
    }

    res.send(foundTravel);
  } 

  saveTravel = async (req: Request, res: Response) => {
    console.log('>>> CREATE TRAVEL ENDPOINT <<<');
    console.log('body', req.body);
    const { lat, lng, locationName, description, type } = req.body;
    const newTravel = await TravelsModel.create({
      description,
      type,
      lat,
      lng,
      locationName
    });
  
    res.status(201).send(newTravel);
  }

  updateTravelById = async (req: Request, res: Response) => {
    console.log('>>> UPDATE TRAVEL BY ID ENDPOINT <<<');
    const id = req.params.id;
    const { description, lat, lng, locationName, type } = req.body;
  
    let currentTravel = await TravelsModel.findById(id);
    if (!currentTravel) {
      res.status(404).send(`No travel found with the given id: ${id}`);
      return;
    }
  
    currentTravel = await TravelsModel.findByIdAndUpdate(id, {
      description,
      type,
      lat,
      lng,
      locationName
    }, { new: true });
  
    res.send(currentTravel);
  }  

  deleteTravelById = async (req: Request, res: Response) => {
    console.log('>>> DELETE TRAVEL BY ID ENDPOINT <<<');
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