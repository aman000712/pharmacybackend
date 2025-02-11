import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DiscoverpointsectionService } from './discoverpointsection.service';
import { CreateDiscoverpointsectionDto } from './dto/create-discoverpointsection.dto';
import { UpdateDiscoverpointsectionDto } from './dto/update-discoverpointsection.dto';

@Controller('discoverpointsection')
export class DiscoverpointsectionController {
  constructor(private readonly discoverpointsectionService: DiscoverpointsectionService) {}

  @Post()
  create(@Body() createDiscoverpointsectionDto: CreateDiscoverpointsectionDto) {
    return this.discoverpointsectionService.discoverpointcreate(createDiscoverpointsectionDto);
  }

  @Get()
  findAll() {
    return this.discoverpointsectionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.discoverpointsectionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDiscoverpointsectionDto: UpdateDiscoverpointsectionDto) {
    return this.discoverpointsectionService.update(+id, updateDiscoverpointsectionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.discoverpointsectionService.remove(+id);
  }
}
