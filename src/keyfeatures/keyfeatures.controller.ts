import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KeyfeaturesService } from './keyfeatures.service';
import { CreateKeyfeatureDto } from './dto/create-keyfeature.dto';
import { UpdateKeyfeatureDto } from './dto/update-keyfeature.dto';

@Controller('keyfeatures')
export class KeyfeaturesController {
  constructor(private readonly keyfeaturesService: KeyfeaturesService) {}

  @Post()
  create(@Body() createKeyfeatureDto: CreateKeyfeatureDto) {
    return this.keyfeaturesService.keyfeaturecreate(createKeyfeatureDto);
  }

  @Get()
  findAll() {
    return this.keyfeaturesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.keyfeaturesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKeyfeatureDto: UpdateKeyfeatureDto) {
    return this.keyfeaturesService.update(+id, updateKeyfeatureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.keyfeaturesService.remove(+id);
  }
}
