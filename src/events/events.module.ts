import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { Event } from './event.entity';
import { Venue } from '../venues/venue.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Event, Venue])],
  controllers: [EventsController],
  providers: [EventsService],
  exports: [EventsService],
})
export class EventsModule {}