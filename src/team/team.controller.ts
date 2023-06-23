import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ValidationPipe,
  UsePipes,
  ParseUUIDPipe,
  Put,
  UseGuards,
} from '@nestjs/common';
import { TeamService } from './team.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth/jwt-auth.guard';

@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @ApiBearerAuth('access-token')
  @ApiTags('team')
  @UsePipes(ValidationPipe)
  @UseGuards(JwtAuthGuard)
  @Post('create')
  async create(@Body() createTeamDto: CreateTeamDto) {
    return await this.teamService.create(createTeamDto);
  }

  @ApiBearerAuth('access-token')
  @ApiTags('team')
  @UseGuards(JwtAuthGuard)
  @Get('findAll')
  async findAll() {
    return await this.teamService.findAll();
  }

  @ApiBearerAuth('access-token')
  @ApiTags('team')
  @UsePipes(ValidationPipe)
  @UseGuards(JwtAuthGuard)
  @Get('getById/:id')
  async findOne(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return await this.teamService.findOne(id);
  }

  @ApiBearerAuth('access-token')
  @ApiTags('team')
  @UsePipes(ValidationPipe)
  @UseGuards(JwtAuthGuard)
  @Put('update')
  async update(@Body() updateTeamDto: UpdateTeamDto) {
    return await this.teamService.update(updateTeamDto);
  }

  @ApiBearerAuth('access-token')
  @ApiTags('team')
  @UsePipes(ValidationPipe)
  @UseGuards(JwtAuthGuard)
  @Delete('delete/:id')
  async remove(@Param('id') id: string) {
    return await this.teamService.remove(id);
  }

  @ApiBearerAuth('access-token')
  @ApiTags('team')
  @UseGuards(JwtAuthGuard)
  @Get('getAllTeamsWithCompany')
  async getAllTeamsWithCompany() {
    return await this.teamService.getAllTeamsWithCompany();
  }
}
