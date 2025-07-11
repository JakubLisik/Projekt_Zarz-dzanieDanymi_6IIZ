import { ApiProperty } from '@nestjs/swagger';
import { IsDecimal, IsNotEmpty, IsUUID } from 'class-validator';

export class CreateTicketDto {
  @ApiProperty()
  @IsDecimal()
  price: string;          // string w walidatorze

  @ApiProperty()
  @IsNotEmpty()
  category: string;

  @ApiProperty()
  @IsUUID()
  eventId: string;
}
