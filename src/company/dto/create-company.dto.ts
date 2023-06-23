import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString, IsDate, IsNotEmpty } from 'class-validator';

export class CreateCompanyDto {
  @ApiProperty({
    type: String,
    required: true,
    example: 'Example Company',
    description: 'The name of the company',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    type: String,
    required: true,
    example: 'John Doe',
    description: 'The CEO of the company',
  })
  @IsString()
  @IsNotEmpty()
  ceo: string;

  @ApiProperty({
    type: String,
    required: true,
    example: '123 Main St, City, State',
    description: 'The address of the company',
  })
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty({
    type: Date,
    required: true,
    example: '2022-01-01',
    description: 'The inception date of the company',
  })
  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  inceptionDate: Date;
}
