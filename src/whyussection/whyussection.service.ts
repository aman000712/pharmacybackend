import { Injectable } from '@nestjs/common';
import { CreateWhyussectionDto } from './dto/create-whyussection.dto';
import { UpdateWhyussectionDto } from './dto/update-whyussection.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Whyussection } from './entities/whyussection.entity';
import { Repository } from 'typeorm';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Injectable()
export class WhyussectionService {

  constructor(
    @InjectRepository(Whyussection) private readonly whyussectionRespository: Repository<Whyussection>,
  ) { }

  async whyussectioncreate(createWhyussectionDto: CreateWhyussectionDto) {
    const newWhyussection = await this.whyussectionRespository.save(createWhyussectionDto);
    if (createWhyussectionDto.image) {
      const image = await this.whyussectionRespository.manager.findOne(
        Fileupload, {
        where: {
          id: createWhyussectionDto.image
        }
      }
      );
      if (!image) {
        throw new Error("image not found");
      }

    }
    return this.whyussectionRespository.save(newWhyussection);
  }

  async findAll() {
    return this.whyussectionRespository.find({
      relations: ['image']
    });
  }

  findOne(id: number) {
    return this.whyussectionRespository.findOne({
      where: {
        id: id,
      },
      relations: ['image']
    });
  }

  update(id: number, updateWhyussectionDto: UpdateWhyussectionDto) {
    return `This action updates a #${id} whyussection`;
  }

  remove(id: number) {
    return this.whyussectionRespository.delete(id);
  }
}
