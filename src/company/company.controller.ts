import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UsePipes,
  ValidationPipe,
  ParseUUIDPipe,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { FindByNameDto } from './dto/find-by-name.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth/jwt-auth.guard';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @ApiBearerAuth('access-token')
  @ApiTags('company')
  @UsePipes(ValidationPipe)
  @UseGuards(JwtAuthGuard)
  @Post('create')
  async create(@Body() createCompanyDto: CreateCompanyDto) {
    return await this.companyService.create(createCompanyDto);
  }

  @ApiBearerAuth('access-token')
  @ApiTags('company')
  @Get('findAll')
  @UseGuards(JwtAuthGuard)
  async findAll() {
    return await this.companyService.findAll();
  }

  @ApiBearerAuth('access-token')
  @ApiTags('company')
  @UsePipes(ValidationPipe)
  @UseGuards(JwtAuthGuard)
  @Get('getById/:id')
  async findOne(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.companyService.findOne(id);
  }

  @ApiBearerAuth('access-token')
  @ApiTags('company')
  @UsePipes(ValidationPipe)
  @UseGuards(JwtAuthGuard)
  @Put('update')
  async update(@Body() updateCompanyDto: UpdateCompanyDto) {
    return await this.companyService.update(updateCompanyDto);
  }

  @ApiBearerAuth('access-token')
  @ApiTags('company')
  @UsePipes(ValidationPipe)
  @UseGuards(JwtAuthGuard)
  @Delete('delete/:id')
  async remove(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return await this.companyService.remove(id);
  }

  @ApiBearerAuth('access-token')
  @ApiTags('company')
  @UsePipes(ValidationPipe)
  @UseGuards(JwtAuthGuard)
  @Post('findByName')
  async findByName(@Body() body: FindByNameDto) {
    return await this.companyService.findByName(body);
  }
}
