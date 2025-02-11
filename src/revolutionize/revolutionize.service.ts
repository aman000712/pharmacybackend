import { Injectable } from '@nestjs/common';
import { CreateRevolutionizeDto } from './dto/create-revolutionize.dto';
import { UpdateRevolutionizeDto } from './dto/update-revolutionize.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Revolutionize } from './entities/revolutionize.entity';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Injectable()
export class RevolutionizeService {

  constructor(
    @InjectRepository(Revolutionize) private readonly revolutionizeRespository: Repository<Revolutionize>,
  ) { }

  async revolutionizecreate(createRevolutionizeDto: CreateRevolutionizeDto) {
    const revolutionize = this.revolutionizeRespository.create(createRevolutionizeDto);
    if(createRevolutionizeDto.image){
      const image = await this.revolutionizeRespository.manager.findOne(
        Fileupload,{
          where:{
            id:createRevolutionizeDto.image
          }
        }
      );
      if(!image){
        throw new Error('Image not found');
      }
    }
    return this.revolutionizeRespository.save(revolutionize);
  }

  async findAll() {
    return this.revolutionizeRespository.find({
      relations: ['image']
    });
  }

  findOne(id: number) {
    return this.revolutionizeRespository.findOne({
      where: {
        id: id
      },
      relations: ['image']
    });
  }

  update(id: number, updateRevolutionizeDto: UpdateRevolutionizeDto) {
    return `This action updates a #${id} revolutionize`;
  }

  remove(id: number) {
    return this.revolutionizeRespository.delete(id);
  }
}
