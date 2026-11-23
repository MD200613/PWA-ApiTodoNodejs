import { eq } from 'drizzle-orm';
import { bedrooms, bedroomTypes, bedTypes } from '../db/schema';
import { Bedroom, BedroomResponse } from '../types/bedroom.types';
import { db } from '../db/connection';
import { resourceUsage } from 'node:process';
import { BedroomType } from '../types/bedroomType.types';
import { BedType } from '../types/bedType.types';

export class BedroomRepository {

  //Section chambre
  async findById(id: string): Promise<Bedroom | null> {
    const result = await db.select().from(bedrooms).where(eq(bedrooms.id, id)).limit(1);
    return result.length > 0 ? this.mapToBedroom(result[0]) : null;
  }

  async getAllBedrooms(): Promise<Bedroom[]> {
    const bedroomList = await db.select().from(bedrooms);

    //À montrer au prof
    const result = await Promise.all(
      bedroomList.map(async x => ({
        ...x,
        bedroomType: await this.findBedroomTypeById(x.bedroomType),
        bed1: await this.findBedTypeById(x.bed1),
        bed2: await this.findBedTypeById(x.bed2)
      }))
    );

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
  //Fin section chambre

  //Section type de chambre
  async findBedroomTypeById(id: string): Promise<string> {
    const result = await db.select().from(bedroomTypes).where(eq(bedroomTypes.id, id)).limit(1);
    return result[0].description;
  }

  async getAllBedroomTypes(): Promise<BedroomType[]> {
    const result = await db.select().from(bedroomTypes);

    return result.map(this.mapToBedroom);
  }

  private mapToBedroomType(row: any): BedroomType {
    return {
      id: row.id,
      description: row.description,
      createdAt: row.createdAt,
      updatedAt: row.updatedAt
    };
  }
  //Fin section type de chambre

  //Section type de lit
  async findBedTypeById(id: string | null): Promise<string | null> {
    if (id == null)
      return null;
    const result = await db.select().from(bedTypes).where(eq(bedTypes.id, id)).limit(1);
    return result[0].description;

  }

  async getAllBedTypes(): Promise<BedType[]> {
    const result = await db.select().from(bedTypes);
    return result.map(this.mapToBedroom);
  }

  private mapToBedType(row: any): BedType {
    return {
      id: row.id,
      description: row.description,
      createdAt: row.createdAt,
      updatedAt: row.updatedAt
    };
  }
  //Fin section type de lit

  
}