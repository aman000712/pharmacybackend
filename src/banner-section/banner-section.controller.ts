import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BannerSectionService } from './banner-section.service';
import { CreateBannerSectionDto } from './dto/create-banner-section.dto';
import { UpdateBannerSectionDto } from './dto/update-banner-section.dto';

@Controller('banner-section')
export class BannerSectionController {
  constructor(private readonly bannerSectionService: BannerSectionService) {}

  @Post()
  create(@Body() createBannerSectionDto: CreateBannerSectionDto) {
    return this.bannerSectionService.bannersectioncreate(createBannerSectionDto);
  }

  @Get()
  findAll() {
    return this.bannerSectionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bannerSectionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBannerSectionDto: UpdateBannerSectionDto) {
    return this.bannerSectionService.update(+id, updateBannerSectionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bannerSectionService.remove(+id);
  }
}
