import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Venue } from '../venues/venue.entity';
import { Ticket } from '../tickets/ticket.entity';

@Entity()
export class Event {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  description?: string;

  @Column({ type: 'timestamp' })
  startDate: Date;

  @Column({ type: 'timestamp' })
  endDate: Date;

  @ManyToOne(() => Venue, (venue) => venue.events, { eager: true })
  venue: Venue;

  @OneToMany(() => Ticket, (ticket) => ticket.event)
  tickets: Ticket[];
}