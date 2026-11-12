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
      if(bedroom == null) {
                res.status(400).json("Une compte de ce numéro existe déjà");
                return;
            }
            res.status(201).json(bedroom);
    } catch (error) {
      next(error);
    }
  };
}