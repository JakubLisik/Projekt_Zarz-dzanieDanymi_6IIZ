import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from '../events/event.entity';
import { Ticket } from '../tickets/ticket.entity';

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(Event) private eventsRepo: Repository<Event>,
    @InjectRepository(Ticket) private ticketsRepo: Repository<Ticket>,
  ) {}

  async eventSummary(eventId: string) {
    const event = await this.eventsRepo.findOne({ where: { id: eventId } });
    const ticketCount = await this.ticketsRepo.count({ where: { event: { id: eventId } } });
    const revenue = await this.ticketsRepo
        .createQueryBuilder('ticket')
        .select('SUM(ticket.price)', 'sum')
        .where('ticket.eventId = :eventId', { eventId })
        .getRawOne<{ sum: string }>();
    return {
      event,
      totalTickets: ticketCount,
      totalRevenue: Number(revenue?.sum ?? 0),
    };
  }
}
