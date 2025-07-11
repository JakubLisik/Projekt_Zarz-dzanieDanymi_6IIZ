import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';
import { Event } from '../events/event.entity';
import { Ticket } from '../tickets/ticket.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Event, Ticket])],
  controllers: [ReportsController],
  providers: [ReportsService],
})
export class ReportsModule {}
