import { Router } from "express";
import { TravelsRoutes } from "./travels/TravelsRoutes";

export class AppRoutes {

  static get routes() : Router {
    const router = Router();
    router.use("/api/travels", TravelsRoutes.routes);

    return router;
  }
}