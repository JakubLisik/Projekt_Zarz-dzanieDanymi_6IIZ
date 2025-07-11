import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from './event.entity';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Venue } from '../venues/venue.entity';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event) private eventsRepo: Repository<Event>,
    @InjectRepository(Venue) private venuesRepo: Repository<Venue>,
  ) {}

  async create(dto: CreateEventDto) {
    const venue = await this.venuesRepo.findOneByOrFail({ id: dto.venueId });
    const event = this.eventsRepo.create({ ...dto, venue });
    return this.eventsRepo.save(event);
  }

  findAll() {
    return this.eventsRepo.find();
  }

  findOne(id: string) {
    return this.eventsRepo.findOne({ where: { id } });
  }

  async update(id: string, dto: UpdateEventDto) {
    await this.eventsRepo.update(id, dto);
    return this.findOne(id);
  }

  remove(id: string) {
    return this.eventsRepo.delete(id);
  }
}