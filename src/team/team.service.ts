import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Team } from './entities/team.entity';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(Team)
    private teamRepository: Repository<Team>,
  ) {}

  async create(createTeamDto: CreateTeamDto): Promise<Team> {
    try {
      const team = this.teamRepository.create(createTeamDto);
      return await this.teamRepository.save(team);
    } catch (error) {
      throw error;
    }
  }

  async findAll(): Promise<Team[]> {
    return await this.teamRepository.find();
  }

  async findOne(id: string): Promise<Team | null> {
    return await this.teamRepository.findOneBy({ id });
  }

  async update(updateTeamDto: UpdateTeamDto): Promise<Team> {
    await this.teamRepository.update(updateTeamDto.id, updateTeamDto);
    return await this.teamRepository.findOne({
      where: { id: updateTeamDto.id },
    });
  }

  async remove(id: string) {
    return await this.teamRepository.delete(id);
  }

  async getAllTeamsWithCompany() {
    return await this.teamRepository
      .createQueryBuilder('team')
      .leftJoinAndSelect('team.company', 'company')
      .getMany();
  }
}
