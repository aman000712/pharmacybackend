import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WhyussectionService } from './whyussection.service';
import { CreateWhyussectionDto } from './dto/create-whyussection.dto';
import { UpdateWhyussectionDto } from './dto/update-whyussection.dto';

@Controller('whyussection')
export class WhyussectionController {
  constructor(private readonly whyussectionService: WhyussectionService) {}

  @Post()
  create(@Body() createWhyussectionDto: CreateWhyussectionDto) {
    return this.whyussectionService.whyussectioncreate(createWhyussectionDto);
  }

  @Get()
  findAll() {
    return this.whyussectionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.whyussectionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWhyussectionDto: UpdateWhyussectionDto) {
    return this.whyussectionService.update(+id, updateWhyussectionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.whyussectionService.remove(+id);
  }
}
