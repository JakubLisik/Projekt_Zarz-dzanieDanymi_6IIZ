import { Repository } from 'typeorm';
import { Venue } from './venue.entity';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
export declare class VenuesService {
    private venuesRepo;
    constructor(venuesRepo: Repository<Venue>);
    create(dto: CreateVenueDto): Promise<Venue>;
    findAll(): Promise<Venue[]>;
    findOne(id: string): Promise<Venue | null>;
    update(id: string, dto: UpdateVenueDto): Promise<Venue | null>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
