import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PricingplansService } from './pricingplans.service';
import { CreatePricingplanDto } from './dto/create-pricingplan.dto';
import { UpdatePricingplanDto } from './dto/update-pricingplan.dto';

@Controller('pricingplans')
export class PricingplansController {
  constructor(private readonly pricingplansService: PricingplansService) {}

  @Post()
  create(@Body() createPricingplanDto: CreatePricingplanDto) {
    return this.pricingplansService.pricingplancreate(createPricingplanDto);
  }

  @Get()
  findAll() {
    return this.pricingplansService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pricingplansService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePricingplanDto: UpdatePricingplanDto) {
    return this.pricingplansService.update(+id, updatePricingplanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pricingplansService.remove(+id);
  }
}
