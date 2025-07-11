import { Ticket } from '../tickets/ticket.entity';
export declare class Attendee {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    tickets: Ticket[];
}
