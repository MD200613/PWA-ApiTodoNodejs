import { BedroomRepository } from '../repositories/bedroom.repository';
import { Bedroom, CreateBedroomRequest, BedroomResponse} from '../types/bedroom.types';
import { v4 as uuidv4 } from 'uuid';

const bedroomRepository = new BedroomRepository();

export class BedroomService {
    async getAllBedrooms(): Promise<Bedroom[]> {
        return await bedroomRepository.getAllBedrooms();
    }
}