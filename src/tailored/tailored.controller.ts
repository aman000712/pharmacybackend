import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TailoredService } from './tailored.service';
import { CreateTailoredDto } from './dto/create-tailored.dto';
import { UpdateTailoredDto } from './dto/update-tailored.dto';

@Controller('tailored')
export class TailoredController {
  constructor(private readonly tailoredService: TailoredService) {}

  @Post()
  create(@Body() createTailoredDto: CreateTailoredDto) {
    return this.tailoredService.tailoredcreate(createTailoredDto);
  }

  @Get()
  findAll() {
    return this.tailoredService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tailoredService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTailoredDto: UpdateTailoredDto) {
    return this.tailoredService.update(+id, updateTailoredDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tailoredService.remove(+id);
  }
}
