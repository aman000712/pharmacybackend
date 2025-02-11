import { Injectable } from '@nestjs/common';
import { CreateAboutsectionDto } from './dto/create-aboutsection.dto';
import { UpdateAboutsectionDto } from './dto/update-aboutsection.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Aboutsection } from './entities/aboutsection.entity';
import { Repository } from 'typeorm';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Injectable()
export class AboutsectionService {


  constructor(
    @InjectRepository(Aboutsection) private readonly aboutsectionRespository: Repository<Aboutsection>,
  ) { }


  async aboutsectioncreate(createAboutsectionDto: CreateAboutsectionDto) {
    const aboutsection = this.aboutsectionRespository.create(createAboutsectionDto);
    if (createAboutsectionDto.image) {
      const image = await this.aboutsectionRespository.manager.findOne(
        Fileupload, {
        where: {
          id: createAboutsectionDto.image
        }
      }
      );
      if (!image) {
        throw new Error("image not found");
      }
    }
    return this.aboutsectionRespository.save(aboutsection);
  }

  async findAll() {
    return this.aboutsectionRespository.find({
      relations:["image"]
    });
  }

  findOne(id: number) {
    return this.aboutsectionRespository.findOne({
      where: {
        id: id,
      },
      relations: ['image']
    });
  }

  update(id: number, updateAboutsectionDto: UpdateAboutsectionDto) {
    return `This action updates a #${id} aboutsection`;
  }

  remove(id: number) {
    return this.aboutsectionRespository.delete(id);
  }
}
