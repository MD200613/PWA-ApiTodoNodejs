import { Router } from 'express';
import { BedRommController } from '../controllers/bedroom.controller';

export const createBedroomRoutes = (): Router => {
  
  const bedroomController = new BedRommController();
  
  const router = Router();

  router.get('/bedrooms', bedroomController.getAllBedrooms);
  router.post('/createBedroom', bedroomController.createBedroom);

  return router;
};