import { Router } from 'express';
import { BedRommController } from '../controllers/bedroom.controller';
import { Connection } from '../middleware/connection.middleware';
import { Admin } from '../middleware/admin.middleware';

export const createBedroomRoutes = (): Router => {
  
  const bedroomController = new BedRommController();
  
  const router = Router();

  router.get('/bedrooms', bedroomController.getAllBedrooms);
  router.post('/createBedroom', Connection, Admin, bedroomController.createBedroom);

  router.get('/bedroomTypes', bedroomController.getAllBedroomTypes);
  
  router.get('/bedTypes', bedroomController.getAllBedTypes);

  return router;
};