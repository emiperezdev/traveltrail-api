import { Router } from "express";
import { TravelsController } from "./TravelsController";

export class TravelsRoutes {
  static get routes(): Router {
    const router = Router();
    const travelsController = new TravelsController();

    router.get('', travelsController.getTravels);

    return router;
  }
}