import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateCompanyDto } from './create-company.dto';
import { IsDateString, IsNotEmpty, IsUUID } from 'class-validator';

export class UpdateCompanyDto extends PartialType(CreateCompanyDto) {
  @ApiProperty({
    type: String,
    required: true,
    example: '1f2cf34d-6216-494d-b075-3c39bb1b4adf',
    description: 'id',
  })
  @IsUUID()
  @IsNotEmpty()
  id: string;

  @ApiProperty({
    required: true,
    type: Date,
    description: 'createdAt',
    example: '2023-06-21T03:16:48.158Z',
  })
  @IsDateString()
  @IsNotEmpty()
  createdAt: Date;

  @ApiProperty({
    required: true,
    type: Date,
    description: 'updatedAt',
    example: '2023-06-21T03:16:48.158Z',
  })
  @IsDateString()
  @IsNotEmpty()
  updatedAt: Date;
}
