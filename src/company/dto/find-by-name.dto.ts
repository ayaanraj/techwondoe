import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class FindByNameDto {
  @ApiProperty({
    type: String,
    required: true,
    example: 'Example Company',
    description: 'The name of the company',
  })
  @IsString()
  @IsNotEmpty()
  name: string;
}
