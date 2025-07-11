import { Repository } from 'typeorm';
import { Attendee } from './attendee.entity';
import { CreateAttendeeDto } from './dto/create-attendee.dto';
import { UpdateAttendeeDto } from './dto/update-attendee.dto';
export declare class AttendeesService {
    private attendeesRepo;
    constructor(attendeesRepo: Repository<Attendee>);
    create(dto: CreateAttendeeDto): Promise<CreateAttendeeDto & Attendee>;
    findAll(): Promise<Attendee[]>;
    findOne(id: string): Promise<Attendee | null>;
    update(id: string, dto: UpdateAttendeeDto): Promise<Attendee | null>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
