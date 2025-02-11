import { Injectable } from '@nestjs/common';
import { CreateKeyfeatureDto } from './dto/create-keyfeature.dto';
import { UpdateKeyfeatureDto } from './dto/update-keyfeature.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Keyfeature } from './entities/keyfeature.entity';
import { Repository } from 'typeorm';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Injectable()
export class KeyfeaturesService {

  constructor(

    @InjectRepository(Keyfeature) private readonly keyfeatureRespository: Repository<Keyfeature>,

  ) { }



  async keyfeaturecreate(createKeyfeatureDto: CreateKeyfeatureDto) {
    const keyfeature = this.keyfeatureRespository.create(createKeyfeatureDto);
    if (createKeyfeatureDto.image) {
      const image = await this.keyfeatureRespository.manager.findOne(
        Fileupload, {
        where: {
          id: createKeyfeatureDto.image
        }
      }
      );
      if (!image) {
        throw new Error("image not found");
      }
    }
    return this.keyfeatureRespository.save(keyfeature);
  }

  async findAll() {
    return this.keyfeatureRespository.find({
      relations: ['image']
    });
  }

  findOne(id: number) {
    return this.keyfeatureRespository.findOne({
      where: {
        id: id,
      },
      relations: ['image']
    });
  }

  update(id: number, updateKeyfeatureDto: UpdateKeyfeatureDto) {
    return `This action updates a #${id} keyfeature`;
  }

  remove(id: number) {
    return this.keyfeatureRespository.delete(id);
  }
}
