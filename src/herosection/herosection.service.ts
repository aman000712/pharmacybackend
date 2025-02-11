import { Injectable } from '@nestjs/common';
import { CreateHerosectionDto } from './dto/create-herosection.dto';
import { UpdateHerosectionDto } from './dto/update-herosection.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Herosection } from './entities/herosection.entity';
import { Repository } from 'typeorm';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Injectable()
export class HerosectionService {

  constructor(
    @InjectRepository(Herosection) private readonly herosectionRespository: Repository<Herosection>,
  ) { }


  async herosectioncreate(createHerosectionDto: CreateHerosectionDto) {
    const herosection = this.herosectionRespository.create(createHerosectionDto);
    if(createHerosectionDto.image){
      const image = await this.herosectionRespository.manager.findOne(
        Fileupload,{
          where:{
            id:createHerosectionDto.image
          }
        }
      );
      if(!image){
        throw new Error("image not found");
      }
      console.log(createHerosectionDto)
    }
    return this.herosectionRespository.save(herosection);
  }

   async findAll() {
    return this.herosectionRespository.find({
      relations:["image"]
    });
  }

  findOne(id: number) {
    return this.herosectionRespository.findOne({
      where:{
        id:id,
      },
      relations:["image"]
    }) ;
  }

  update(id: number, updateHerosectionDto: UpdateHerosectionDto) {
    return `This action updates a #${id} herosection`;
  }

  remove(id: number) {
    return this.herosectionRespository.delete(id);
  }
}
