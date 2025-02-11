import { Injectable } from '@nestjs/common';
import { CreatePricingplanDto } from './dto/create-pricingplan.dto';
import { UpdatePricingplanDto } from './dto/update-pricingplan.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pricingplan } from './entities/pricingplan.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PricingplansService {


  constructor(
    @InjectRepository(Pricingplan) private readonly pricingplanRespository: Repository<Pricingplan>,
  ) { }


  async pricingplancreate(createPricingplanDto: CreatePricingplanDto) {
    const pricingplan = this.pricingplanRespository.create(createPricingplanDto);
    return this.pricingplanRespository.save(pricingplan);
  }

  async findAll() {
    return this.pricingplanRespository.find({
      relations: ['image']
    });
  }

  findOne(id: number) {
    return this.pricingplanRespository.findOne({
      where: {
        id: id,
      },
      relations: ['image']
    });
  }

  update(id: number, updatePricingplanDto: UpdatePricingplanDto) {
    return `This action updates a #${id} pricingplan`;
  }

  remove(id: number) {
    return this.pricingplanRespository.delete(id);
  }
}
