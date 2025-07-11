import { AttendeesService } from './attendees.service';
import { CreateAttendeeDto } from './dto/create-attendee.dto';
import { UpdateAttendeeDto } from './dto/update-attendee.dto';
export declare class AttendeesController {
    private readonly attendeesService;
    constructor(attendeesService: AttendeesService);
    create(dto: CreateAttendeeDto): Promise<CreateAttendeeDto & import("./attendee.entity").Attendee>;
    findAll(): Promise<import("./attendee.entity").Attendee[]>;
    findOne(id: string): Promise<import("./attendee.entity").Attendee | null>;
    update(id: string, dto: UpdateAttendeeDto): Promise<import("./attendee.entity").Attendee | null>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
