import { Venue } from '../venues/venue.entity';
import { Ticket } from '../tickets/ticket.entity';
export declare class Event {
    id: string;
    name: string;
    description?: string;
    startDate: Date;
    endDate: Date;
    venue: Venue;
    tickets: Ticket[];
}
