import { Injectable } from '@nestjs/common';
import { CreateTransformpointsectionDto } from './dto/create-transformpointsection.dto';
import { UpdateTransformpointsectionDto } from './dto/update-transformpointsection.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Transformpointsection } from './entities/transformpointsection.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TransformpointsectionService {

  constructor(
    @InjectRepository(Transformpointsection) private readonly transformpointsectionRespository: Repository<Transformpointsection>,
  ){}


  async transformpointcreate(createTransformpointsectionDto: CreateTransformpointsectionDto) {
    const transformpointsection = this.transformpointsectionRespository.create(createTransformpointsectionDto);
    return this.transformpointsectionRespository.save(transformpointsection); ;
  }

  findAll() {
    return this.transformpointsectionRespository.find({
      relations:["image"]
    });
  }

  findOne(id: number) {
    return this.transformpointsectionRespository.findOne({
      where:{
        id:id,
      },
      relations:["image"]
    });
  }

  update(id: number, updateTransformpointsectionDto: UpdateTransformpointsectionDto) {
    return `This action updates a #${id} transformpointsection`;
  }

  remove(id: number) {
    return this.transformpointsectionRespository.delete(id);
  }
}
