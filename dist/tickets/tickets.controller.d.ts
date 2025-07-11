import { TicketsService } from './tickets.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
export declare class TicketsController {
    private readonly ticketsService;
    constructor(ticketsService: TicketsService);
    create(dto: CreateTicketDto): Promise<import("./ticket.entity").Ticket>;
    findAll(): Promise<import("./ticket.entity").Ticket[]>;
    findOne(id: string): Promise<import("./ticket.entity").Ticket | null>;
    update(id: string, dto: UpdateTicketDto): Promise<import("./ticket.entity").Ticket | null>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
