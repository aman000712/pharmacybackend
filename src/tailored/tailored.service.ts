import { Injectable } from '@nestjs/common';
import { CreateTailoredDto } from './dto/create-tailored.dto';
import { UpdateTailoredDto } from './dto/update-tailored.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tailored } from './entities/tailored.entity';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Injectable()
export class TailoredService {

  constructor(

    @InjectRepository(Tailored) private readonly tailoredRespository: Repository<Tailored>,


  ) { }


  async tailoredcreate(createTailoredDto: CreateTailoredDto) {
    const tailored = this.tailoredRespository.create(createTailoredDto);
    if (createTailoredDto.image) {
      const image = await this.tailoredRespository.manager.findOne(
        Fileupload, {
        where: {
          id: createTailoredDto.image
        }
      }
      );
      if (!image) {
        throw new Error('Image not found');
      }
    }
    return this.tailoredRespository.save(tailored);
  }

  async findAll() {
    return this.tailoredRespository.find({
      relations: ['image']
    });
  }

  findOne(id: number) {
    return this.tailoredRespository.findOne({
      where: {
        id: id,
      },
      relations: ['image']
    });
  }

  update(id: number, updateTailoredDto: UpdateTailoredDto) {
    return `This action updates a #${id} tailored`;
  }

  remove(id: number) {
    return this.tailoredRespository.delete(id);
  }
}
