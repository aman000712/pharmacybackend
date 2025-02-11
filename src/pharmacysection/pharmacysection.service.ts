import { Injectable } from '@nestjs/common';
import { CreatePharmacysectionDto } from './dto/create-pharmacysection.dto';
import { UpdatePharmacysectionDto } from './dto/update-pharmacysection.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pharmacysection } from './entities/pharmacysection.entity';
import { Repository } from 'typeorm';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Injectable()
export class PharmacysectionService {


  constructor(
    @InjectRepository(Pharmacysection) private readonly pharmacysectionRespository: Repository<Pharmacysection>,
  ) { }

  async pharmacysectioncreate(createPharmacysectionDto: CreatePharmacysectionDto) {
    const pharmacysection = this.pharmacysectionRespository.create(createPharmacysectionDto);
    if (createPharmacysectionDto.image) {
      const image = await this.pharmacysectionRespository.manager.findOne(
        Fileupload, {
        where: {
          id: createPharmacysectionDto.image
        }
      }
      );
      if (!image) {
        throw new Error("image not found");
      }
    }
    return this.pharmacysectionRespository.save(createPharmacysectionDto);
  }

  async findAll() {
    return this.pharmacysectionRespository.find({
      relations: ['image']
    });
  }

  findOne(id: number) {
    return this.pharmacysectionRespository.findOne({
      where: {
        id: id,
      },
      relations: ['image']
    })
  }

  update(id: number, updatePharmacysectionDto: UpdatePharmacysectionDto) {
    return `This action updates a #${id} pharmacysection`;
  }

  remove(id: number) {
    return this.pharmacysectionRespository.delete(id);
  }
}
