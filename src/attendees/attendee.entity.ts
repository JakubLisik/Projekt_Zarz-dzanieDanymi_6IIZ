import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Ticket } from '../tickets/ticket.entity';

@Entity()
export class Attendee {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @OneToMany(() => Ticket, (ticket) => ticket.attendee)
  tickets: Ticket[];
}
