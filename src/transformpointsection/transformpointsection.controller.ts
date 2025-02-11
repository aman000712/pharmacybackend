import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransformpointsectionService } from './transformpointsection.service';
import { CreateTransformpointsectionDto } from './dto/create-transformpointsection.dto';
import { UpdateTransformpointsectionDto } from './dto/update-transformpointsection.dto';

@Controller('transformpointsection')
export class TransformpointsectionController {
  constructor(private readonly transformpointsectionService: TransformpointsectionService) {}

  @Post()
  create(@Body() createTransformpointsectionDto: CreateTransformpointsectionDto) {
    return this.transformpointsectionService.transformpointcreate(createTransformpointsectionDto);
  }

  @Get()
  findAll() {
    return this.transformpointsectionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transformpointsectionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTransformpointsectionDto: UpdateTransformpointsectionDto) {
    return this.transformpointsectionService.update(+id, updateTransformpointsectionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transformpointsectionService.remove(+id);
  }
}
