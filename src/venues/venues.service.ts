import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Venue } from './venue.entity';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';

@Injectable()
export class VenuesService {
  constructor(
    @InjectRepository(Venue) private venuesRepo: Repository<Venue>,
  ) {}

  create(dto: CreateVenueDto) {
    const venue = this.venuesRepo.create(dto);
    return this.venuesRepo.save(venue);
  }

  findAll() {
    return this.venuesRepo.find();
  }

  findOne(id: string) {
    return this.venuesRepo.findOne({ where: { id } });
  }

  async update(id: string, dto: UpdateVenueDto) {
    await this.venuesRepo.update(id, dto);
    return this.findOne(id);
  }

  remove(id: string) {
    return this.venuesRepo.delete(id);
  }
}
