import { eq } from 'drizzle-orm';
import { bedrooms, bedTypes } from '../db/schema';
import { Bedroom, BedroomResponse } from '../types/bedroom.types';
import { db } from '../db/connection';
import { resourceUsage } from 'node:process';

export class BedroomRepository {
  async findById(id: string): Promise<Bedroom | null> {
    const result = await db.select().from(bedrooms).where(eq(bedrooms.id, id)).limit(1);
    return result.length > 0 ? this.mapToBedroom(result[0]) : null;
  }

  async getAllBedrooms(): Promise<Bedroom[]> {
    const result = await db.select().from(bedrooms);
    return result.map(this.mapToBedroom);
  }

  async createBedroom(bedroom: Bedroom): Promise<Bedroom> {
    await db.insert(bedrooms).values(bedroom);

    const result = await this.findById(bedroom.id);
    if (!result)
      throw new Error('Failed to create bedroom');
    return result;
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