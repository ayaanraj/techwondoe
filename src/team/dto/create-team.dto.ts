import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsUUID } from 'class-validator';

export class CreateTeamDto {
  @ApiProperty({
    type: String,
    required: true,
    example: 'John Doe',
    description: 'Enter lead team name',
  })
  @IsString()
  @IsNotEmpty()
  leadName: string;

  @ApiProperty({
    type: String,
    required: true,
    example: '1f2cf34d-6216-494d-b075-3c39bb1b4adf',
    description: 'id',
  })
  @IsUUID()
  @IsNotEmpty()
  companyId: string;
}
