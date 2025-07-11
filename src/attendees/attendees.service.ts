import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Attendee } from './attendee.entity';
import { CreateAttendeeDto } from './dto/create-attendee.dto';
import { UpdateAttendeeDto } from './dto/update-attendee.dto';

@Injectable()
export class AttendeesService {
  constructor(
    @InjectRepository(Attendee) private attendeesRepo: Repository<Attendee>,
  ) {}

  create(dto: CreateAttendeeDto) {
    return this.attendeesRepo.save(dto);
  }

  findAll() {
    return this.attendeesRepo.find({ relations: ['tickets'] });
  }

  findOne(id: string) {
    return this.attendeesRepo.findOne({ where: { id }, relations: ['tickets'] });
  }

  async update(id: string, dto: UpdateAttendeeDto) {
    await this.attendeesRepo.update(id, dto);
    return this.findOne(id);
  }

  remove(id: string) {
    return this.attendeesRepo.delete(id);
  }
}
