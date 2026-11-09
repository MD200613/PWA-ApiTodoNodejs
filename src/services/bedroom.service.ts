import { BedroomRepository } from '../repositories/bedroom.repository';
import { Bedroom, CreateBedroomRequest, BedroomResponse} from '../types/bedroom.types';
import { v4 as uuidv4 } from 'uuid';

const bedroomRepository = new BedroomRepository();

export class BedroomService {
    async getAllBedrooms(): Promise<Bedroom[]> {
        return await bedroomRepository.getAllBedrooms();
    }

    async createBedroom(data: CreateBedroomRequest): Promise<BedroomResponse | null> {
        const now = new Date();
        const bedroom = {
            id: uuidv4(),
            bedroomNumber: data.bedroomNumber,
            bedroomType: data.bedroomType,
            description: data.description,
            nbMaxClients: data.nbMaxClients,
            sizeInMeterSquare: data.sizeInMeterSquare,
            bed1: data.bed1,
            bed2: data.bed2,
            price: data.price,
            hotelName: data.hotelName,
            createdAt: now,
            updatedAt: now
        }

        return await bedroomRepository.createBedroom(bedroom);
    }
}