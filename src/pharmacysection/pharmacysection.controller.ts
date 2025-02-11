import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PharmacysectionService } from './pharmacysection.service';
import { CreatePharmacysectionDto } from './dto/create-pharmacysection.dto';
import { UpdatePharmacysectionDto } from './dto/update-pharmacysection.dto';

@Controller('pharmacysection')
export class PharmacysectionController {
  constructor(private readonly pharmacysectionService: PharmacysectionService) {}

  @Post()
  create(@Body() createPharmacysectionDto: CreatePharmacysectionDto) {
    return this.pharmacysectionService.pharmacysectioncreate(createPharmacysectionDto);
  }

  @Get()
  findAll() {
    return this.pharmacysectionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pharmacysectionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePharmacysectionDto: UpdatePharmacysectionDto) {
    return this.pharmacysectionService.update(+id, updatePharmacysectionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pharmacysectionService.remove(+id);
  }
}
