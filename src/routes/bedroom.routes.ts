import { Router } from 'express';
import { BedRommController } from '../controllers/bedroom.controller';
import { Connection } from '../middleware/connection.middleware';
import { Admin } from '../middleware/admin.middleware';

export const createBedroomRoutes = (): Router => {
  
  const bedroomController = new BedRommController();
  
  const router = Router();

  router.get('/bedrooms', Connection, Admin, bedroomController.getAllBedrooms);
  router.post('/createBedroom', bedroomController.createBedroom);

  return router;
};