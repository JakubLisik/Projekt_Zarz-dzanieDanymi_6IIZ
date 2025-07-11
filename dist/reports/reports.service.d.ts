import { Repository } from 'typeorm';
import { Event } from '../events/event.entity';
import { Ticket } from '../tickets/ticket.entity';
export declare class ReportsService {
    private eventsRepo;
    private ticketsRepo;
    constructor(eventsRepo: Repository<Event>, ticketsRepo: Repository<Ticket>);
    eventSummary(eventId: string): Promise<{
        event: Event | null;
        totalTickets: number;
        totalRevenue: number;
    }>;
}
