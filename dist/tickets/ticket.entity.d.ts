import { Event } from '../events/event.entity';
import { Attendee } from '../attendees/attendee.entity';
export declare class Ticket {
    id: string;
    price: number;
    category: string;
    event: Event;
    attendee?: Attendee;
}
