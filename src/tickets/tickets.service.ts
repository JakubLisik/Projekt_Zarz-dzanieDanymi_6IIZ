import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ticket } from './ticket.entity';
import { Event } from '../events/event.entity';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';

@Injectable()
export class TicketsService {
  constructor(
    @InjectRepository(Ticket) private ticketsRepo: Repository<Ticket>,
    @InjectRepository(Event) private eventsRepo: Repository<Event>,
  ) {}

  async create(dto: CreateTicketDto) {
    const event = await this.eventsRepo.findOneByOrFail({ id: dto.eventId });
    const ticket = this.ticketsRepo.create({ ...dto, price: +dto.price, event });
    return this.ticketsRepo.save(ticket);
  }

  findAll() {
    return this.ticketsRepo.find();
  }

  findOne(id: string) {
    return this.ticketsRepo.findOne({ where: { id } });
  }

  async update(id: string, dto: UpdateTicketDto) {
    await this.ticketsRepo.update(id, { ...dto, price: dto.price !== undefined ? +dto.price : undefined });
    return this.findOne(id);
  }

  remove(id: string) {
    return this.ticketsRepo.delete(id);
  }
}
