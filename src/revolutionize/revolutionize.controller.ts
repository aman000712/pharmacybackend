import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RevolutionizeService } from './revolutionize.service';
import { CreateRevolutionizeDto } from './dto/create-revolutionize.dto';
import { UpdateRevolutionizeDto } from './dto/update-revolutionize.dto';

@Controller('revolutionize')
export class RevolutionizeController {
  constructor(private readonly revolutionizeService: RevolutionizeService) {}

  @Post()
  create(@Body() createRevolutionizeDto: CreateRevolutionizeDto) {
    return this.revolutionizeService.revolutionizecreate(createRevolutionizeDto);
  }

  @Get()
  findAll() {
    return this.revolutionizeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.revolutionizeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRevolutionizeDto: UpdateRevolutionizeDto) {
    return this.revolutionizeService.update(+id, updateRevolutionizeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.revolutionizeService.remove(+id);
  }
}
