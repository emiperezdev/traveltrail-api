import { Router } from "express";
import { TravelsController } from "./TravelsController";
import validateId from "../../middleware/validateId";

export class TravelsRoutes {
  static get routes(): Router {
    const router = Router();
    const travelsController = new TravelsController();

    router.get('', travelsController.getTravels);
    router.get('/:id', validateId, travelsController.getTravelById);
    router.post('', travelsController.saveTravel);
    router.put('/:id', validateId, travelsController.updateTravelById);
    router.delete('/:id', validateId, travelsController.updateTravelById);

    return router;
  }
}