import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VisionsectionService } from './visionsection.service';
import { CreateVisionsectionDto } from './dto/create-visionsection.dto';
import { UpdateVisionsectionDto } from './dto/update-visionsection.dto';

@Controller('visionsection')
export class VisionsectionController {
  constructor(private readonly visionsectionService: VisionsectionService) {}

  @Post()
  create(@Body() createVisionsectionDto: CreateVisionsectionDto) {
    return this.visionsectionService.visionsectioncreate(createVisionsectionDto);
  }

  @Get()
  findAll() {
    return this.visionsectionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.visionsectionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVisionsectionDto: UpdateVisionsectionDto) {
    return this.visionsectionService.update(+id, updateVisionsectionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.visionsectionService.remove(+id);
  }
}
