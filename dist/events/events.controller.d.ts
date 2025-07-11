import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
export declare class EventsController {
    private readonly eventsService;
    constructor(eventsService: EventsService);
    create(dto: CreateEventDto): Promise<import("./event.entity").Event>;
    findAll(): Promise<import("./event.entity").Event[]>;
    findOne(id: string): Promise<import("./event.entity").Event | null>;
    update(id: string, dto: UpdateEventDto): Promise<import("./event.entity").Event | null>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
