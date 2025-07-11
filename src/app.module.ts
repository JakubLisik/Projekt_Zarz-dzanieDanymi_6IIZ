import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from './config/typeorm.config';

import { EventsModule } from './events/events.module';
import { VenuesModule } from './venues/venues.module';
import { TicketsModule } from './tickets/tickets.module';
import { AttendeesModule } from './attendees/attendees.module';
import { ReportsModule } from './reports/reports.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(AppDataSource.options),
    EventsModule,
    VenuesModule,
    TicketsModule,
    AttendeesModule,
    ReportsModule,
  ],
})
export class AppModule {}