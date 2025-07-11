import { Repository } from 'typeorm';
import { Ticket } from './ticket.entity';
import { Event } from '../events/event.entity';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
export declare class TicketsService {
    private ticketsRepo;
    private eventsRepo;
    constructor(ticketsRepo: Repository<Ticket>, eventsRepo: Repository<Event>);
    create(dto: CreateTicketDto): Promise<Ticket>;
    findAll(): Promise<Ticket[]>;
    findOne(id: string): Promise<Ticket | null>;
    update(id: string, dto: UpdateTicketDto): Promise<Ticket | null>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
