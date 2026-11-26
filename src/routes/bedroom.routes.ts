import { Router } from 'express';
import { BedRommController } from '../controllers/bedroom.controller';
import { Connection } from '../middleware/connection.middleware';
import { Admin } from '../middleware/admin.middleware';

export const createBedroomRoutes = (): Router => {
  
  const bedroomController = new BedRommController();
  
  const router = Router();

  router.get('/getAll', bedroomController.getAllBedrooms);
  router.post('/create', Connection, Admin, bedroomController.createBedroom);

  




  router.get('/getBedroomTypes', bedroomController.getAllBedroomTypes);
  
  router.get('/getBedTypes', bedroomController.getAllBedTypes);

  return router;
};