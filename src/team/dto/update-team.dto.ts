import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateTeamDto } from './create-team.dto';
import { IsUUID, IsNotEmpty, IsDateString } from 'class-validator';

export class UpdateTeamDto extends PartialType(CreateTeamDto) {
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
