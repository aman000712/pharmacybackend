import { Injectable } from '@nestjs/common';
import { CreateVisionsectionDto } from './dto/create-visionsection.dto';
import { UpdateVisionsectionDto } from './dto/update-visionsection.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Visionsection } from './entities/visionsection.entity';
import { Repository } from 'typeorm';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Injectable()
export class VisionsectionService {

  constructor(
    @InjectRepository(Visionsection) private readonly visionsectionRespository: Repository<Visionsection>,
  ) { }

  async visionsectioncreate(createVisionsectionDto: CreateVisionsectionDto) {
    const visionsection = this.visionsectionRespository.create(createVisionsectionDto);
    if (createVisionsectionDto.image) {
      const image = await this.visionsectionRespository.manager.findOne(
        Fileupload, {
        where: {
          id: createVisionsectionDto.image
        }
      }
      );
      if (!image) {
        throw new Error("image not found");
      }
    }
    return this.visionsectionRespository.save(createVisionsectionDto);
  }

  async findAll() {
    return this.visionsectionRespository.find({
      relations:["image"]
    });
  }

  findOne(id: number) {
    return this.visionsectionRespository.findOne({
      where: {
        id: id,
      },
      relations:["image"]
    });
  }

  update(id: number, updateVisionsectionDto: UpdateVisionsectionDto) {
    return `This action updates a #${id} visionsection`;
  }

  remove(id: number) {
    return this.visionsectionRespository.delete(id);
  }
}
