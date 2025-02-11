import { Injectable } from '@nestjs/common';
import { CreateDiscoverpointsectionDto } from './dto/create-discoverpointsection.dto';
import { UpdateDiscoverpointsectionDto } from './dto/update-discoverpointsection.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Discoverpointsection } from './entities/discoverpointsection.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DiscoverpointsectionService {

  constructor(
    @InjectRepository(Discoverpointsection) private readonly discoverpointsectionRespository: Repository<Discoverpointsection>,
  ) { }


  async discoverpointcreate(createDiscoverpointsectionDto: CreateDiscoverpointsectionDto) {
    const discoverpointsection = this.discoverpointsectionRespository.create(createDiscoverpointsectionDto);
    return this.discoverpointsectionRespository.save(createDiscoverpointsectionDto);
  }

  async findAll() {
    return this.discoverpointsectionRespository.find({
      relations: ['image']
    });
  }

  findOne(id: number) {
    return this.discoverpointsectionRespository.findOne({
      where: {
        id: id,
      },
      relations: ['image']
    });
  }

  update(id: number, updateDiscoverpointsectionDto: UpdateDiscoverpointsectionDto) {
    return `This action updates a #${id} discoverpointsection`;
  }

  remove(id: number) {
    return this.discoverpointsectionRespository.delete(id);
  }
}
