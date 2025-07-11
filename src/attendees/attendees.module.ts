import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttendeesService } from './attendees.service';
import { AttendeesController } from './attendees.controller';
import { Attendee } from './attendee.entity';
import { Ticket } from '../tickets/ticket.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Attendee, Ticket])],
  controllers: [AttendeesController],
  providers: [AttendeesService],
})
export class AttendeesModule {}
