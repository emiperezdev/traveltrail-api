import { Router } from "express";
import { TravelsController } from "./TravelsController";
import validateId from "../../middleware/validateId";
import validateBody from "../../middleware/validateBody";
import { travelRequest } from "../../domain/schemas.joi";

export class TravelsRoutes {
  static get routes(): Router {
    const router = Router();
    const travelsController = new TravelsController();

    router.get('', travelsController.getTravels);
    router.get('/:id', validateId, travelsController.getTravelById);
    router.post('', validateBody(travelRequest), travelsController.saveTravel);
    router.put('/:id', validateId, validateBody(travelRequest), travelsController.updateTravelById);
    router.delete('/:id', validateId, travelsController.deleteTravelById);

    return router;
  }
}