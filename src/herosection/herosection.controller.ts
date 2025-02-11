import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HerosectionService } from './herosection.service';
import { CreateHerosectionDto } from './dto/create-herosection.dto';
import { UpdateHerosectionDto } from './dto/update-herosection.dto';

@Controller('herosection')
export class HerosectionController {
  constructor(private readonly herosectionService: HerosectionService) { }

  @Post()
  async create(@Body() createHerosectionDto: CreateHerosectionDto) {
    return this.herosectionService.herosectioncreate(createHerosectionDto);
  }

  @Get()
  findAll() {
    return this.herosectionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.herosectionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHerosectionDto: UpdateHerosectionDto) {
    return this.herosectionService.update(+id, updateHerosectionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.herosectionService.remove(+id);
  }
}
