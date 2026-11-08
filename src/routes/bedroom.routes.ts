import { Router } from 'express';
import { BedRommController } from '../controllers/bedroom.controller';

export const createBedroomRoutes = (): Router => {
  
  const bedroomController = new BedRommController();
  
  const router = Router();

  router.get('/bedrooms', bedroomController.getAllBedrooms);

  return router;
};