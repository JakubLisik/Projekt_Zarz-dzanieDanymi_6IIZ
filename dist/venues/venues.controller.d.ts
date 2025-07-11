import { VenuesService } from './venues.service';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
export declare class VenuesController {
    private readonly venuesService;
    constructor(venuesService: VenuesService);
    create(dto: CreateVenueDto): Promise<import("./venue.entity").Venue>;
    findAll(): Promise<import("./venue.entity").Venue[]>;
    findOne(id: string): Promise<import("./venue.entity").Venue | null>;
    update(id: string, dto: UpdateVenueDto): Promise<import("./venue.entity").Venue | null>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
