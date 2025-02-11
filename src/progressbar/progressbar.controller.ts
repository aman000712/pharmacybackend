import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProgressbarService } from './progressbar.service';
import { CreateProgressbarDto } from './dto/create-progressbar.dto';
import { UpdateProgressbarDto } from './dto/update-progressbar.dto';

@Controller('progressbar')
export class ProgressbarController {
  constructor(private readonly progressbarService: ProgressbarService) {}

  @Post()
  create(@Body() createProgressbarDto: CreateProgressbarDto) {
    return this.progressbarService.progressbarcreate(createProgressbarDto);
  }

  @Get()
  findAll() {
    return this.progressbarService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.progressbarService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProgressbarDto: UpdateProgressbarDto) {
    return this.progressbarService.update(+id, updateProgressbarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.progressbarService.remove(+id);
  }
}
