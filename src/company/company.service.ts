import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from './entities/company.entity';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { FindByNameDto } from './dto/find-by-name.dto';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private companyRepository: Repository<Company>,
  ) {}

  async create(createCompanyDto: CreateCompanyDto): Promise<Company> {
    try {
      const company = this.companyRepository.create(createCompanyDto);
      return await this.companyRepository.save(company);
    } catch (error) {
      throw error;
    }
  }

  async findAll(): Promise<Company[]> {
    return await this.companyRepository.find();
  }

  async findOne(id: string): Promise<Company | null> {
    return await this.companyRepository.findOneBy({ id });
  }

  async update(updateCompanyDto: UpdateCompanyDto): Promise<Company> {
    await this.companyRepository.update(updateCompanyDto.id, updateCompanyDto);
    return await this.companyRepository.findOne({
      where: { id: updateCompanyDto.id },
    });
  }

  async remove(id: string) {
    return await this.companyRepository.delete(id);
  }

  async findByName(data: FindByNameDto): Promise<Company | null> {
    const company = await this.companyRepository.findOne({
      where: { name: data.name },
    });
    if (company) return company;
    throw new BadRequestException(`Company with name ${data.name} not found.`);
  }
}
