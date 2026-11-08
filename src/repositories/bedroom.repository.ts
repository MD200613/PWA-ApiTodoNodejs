import { eq } from 'drizzle-orm';
import { bedrooms, bedTypes } from '../db/schema';
import { Bedroom, BedroomResponse } from '../types/bedroom.types';
import { db } from '../db/connection';

export class BedroomRepository {
    async getAllBedrooms(): Promise<Bedroom[]> {
        const result = await db.select().from(bedrooms);
        return result.map(this.mapToBedroom);
    }

    private mapToBedroom(row: any): Bedroom {
        return {
          id: row.id,
          bedroomNumber: row.bedroomNumber,
          bedroomType: row.bedroomType,
          description: row.description,
          nbMaxClients: row.nbMaxClients,
          sizeInMeterSquare: row.sizeInMeterSquare,
          bed1: row.bed1,
          bed2: row.bed2,
          price: row.price,
          hotelName: row.hotelName,
          createdAt: row.createdAt,
          updatedAt: row.updatedAt
        };
      }
}