import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FaqsectionService } from './faqsection.service';
import { CreateFaqsectionDto } from './dto/create-faqsection.dto';
import { UpdateFaqsectionDto } from './dto/update-faqsection.dto';

@Controller('faqsection')
export class FaqsectionController {
  constructor(private readonly faqsectionService: FaqsectionService) {}

  @Post()
  create(@Body() createFaqsectionDto: CreateFaqsectionDto) {
    return this.faqsectionService.faqsectioncreate(createFaqsectionDto);
  }

  @Get()
  findAll() {
    return this.faqsectionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.faqsectionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFaqsectionDto: UpdateFaqsectionDto) {
    return this.faqsectionService.update(+id, updateFaqsectionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.faqsectionService.remove(+id);
  }
}
