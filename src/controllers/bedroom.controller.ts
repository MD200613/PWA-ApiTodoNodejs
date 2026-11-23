import { Request, Response, NextFunction } from 'express';
import { BedroomService } from '../services/bedroom.service';
import { CreateBedroomRequest } from '../types/bedroom.types';

const bedroomService = new BedroomService();

export class BedRommController {
  getAllBedrooms = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    
    try {
      const bedrooms = await bedroomService.getAllBedrooms();
      res.status(200).json(bedrooms);
    } catch (error) {
      next(error);
    }
  };

  createBedroom = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const bedroomRequest : CreateBedroomRequest = req.body;
    
    try {
      const bedroom = await bedroomService.createBedroom(bedroomRequest);

      res.status(201).json(bedroom);
    } catch (error) {
      next(error);
    }
  };

  getAllBedroomTypes = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const bedroomTypes = await bedroomService.getAllBedroomTypes();
      res.status(200).json(bedroomTypes);
    } catch (error) {
      next(error);
    }
  };

  getAllBedTypes = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const bedTypes = await bedroomService.getAllBedTypes();
      res.status(200).json(bedTypes);
    } catch (error) {
      next(error);
    }
  };
}