import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TicketsService } from './tickets.service';
import { TicketsController } from './tickets.controller';
import { Ticket } from './ticket.entity';
import { Event } from '../events/event.entity';
import { Attendee } from '../attendees/attendee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ticket, Event, Attendee])],
  controllers: [TicketsController],
  providers: [TicketsService],
})
export class TicketsModule {}
