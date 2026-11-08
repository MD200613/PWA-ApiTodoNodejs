export interface Bedroom {
    id: string;
    bedroomNumber: number;
    bedroomType: string;
    description: string;
    nbMaxClients: number;
    sizeInMeterSquare: number;
    bed1: string;
    bed2?: string;
    price: number;
    hotelName: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface CreateBedroomRequest {
    bedroomNumber: number;
    bedroomType: string;
    description: string;
    nbMaxClients: number;
    sizeInMeterSquare: number;
    bed1: string;
    bed2?: string;
    price: number;
    hotelName: string;
}

export interface BedroomResponse {
    id: string;
    bedroomNumber: number;
    bedroomType: string;
    description: string;
    nbMaxClients: number;
    sizeInMeterSquare: number;
    bed1: string;
    bed2?: string;
    price: number;
    hotelName: string;
    createdAt: Date;
    updatedAt: Date;
}
