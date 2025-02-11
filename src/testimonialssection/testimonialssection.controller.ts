import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TestimonialssectionService } from './testimonialssection.service';
import { CreateTestimonialssectionDto } from './dto/create-testimonialssection.dto';
import { UpdateTestimonialssectionDto } from './dto/update-testimonialssection.dto';

@Controller('testimonialssection')
export class TestimonialssectionController {
  constructor(private readonly testimonialssectionService: TestimonialssectionService) {}

  @Post()
  create(@Body() createTestimonialssectionDto: CreateTestimonialssectionDto) {
    return this.testimonialssectionService.testimonialscreate(createTestimonialssectionDto);
  }

  @Get()
  findAll() {
    return this.testimonialssectionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testimonialssectionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestimonialssectionDto: UpdateTestimonialssectionDto) {
    return this.testimonialssectionService.update(+id, updateTestimonialssectionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testimonialssectionService.remove(+id);
  }
}
