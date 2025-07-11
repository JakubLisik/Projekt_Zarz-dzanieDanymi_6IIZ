import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { Event } from '../events/event.entity';
import { Attendee } from '../attendees/attendee.entity';

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('decimal', { precision: 8, scale: 2 })
  price: number;

  @Column()
  category: string; // np. VIP, Standard

  @ManyToOne(() => Event, (event) => event.tickets, { eager: true })
  event: Event;

  @ManyToOne(() => Attendee, (attendee) => attendee.tickets, { nullable: true })
  attendee?: Attendee;
}
