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
}