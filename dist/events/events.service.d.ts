import { Repository } from 'typeorm';
import { Event } from './event.entity';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Venue } from '../venues/venue.entity';
export declare class EventsService {
    private eventsRepo;
    private venuesRepo;
    constructor(eventsRepo: Repository<Event>, venuesRepo: Repository<Venue>);
    create(dto: CreateEventDto): Promise<Event>;
    findAll(): Promise<Event[]>;
    findOne(id: string): Promise<Event | null>;
    update(id: string, dto: UpdateEventDto): Promise<Event | null>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
