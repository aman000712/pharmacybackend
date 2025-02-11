import { Injectable } from '@nestjs/common';
import { CreateFaqsectionDto } from './dto/create-faqsection.dto';
import { UpdateFaqsectionDto } from './dto/update-faqsection.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Faqsection } from './entities/faqsection.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FaqsectionService {

  constructor(
    @InjectRepository(Faqsection) private readonly faqsectionRespository: Repository<Faqsection>,
  ) { }


  async faqsectioncreate(createFaqsectionDto: CreateFaqsectionDto) {
    const faqsection = await this.faqsectionRespository.create(createFaqsectionDto);
    return this.faqsectionRespository.save(faqsection);
  }

  async findAll() {
    return this.faqsectionRespository.find({
      relations: ['image']
    });
  }

  findOne(id: number) {
    return this.faqsectionRespository.findOne({
      where: {
        id: id,
      },
      relations: ['image']
    });
  }

  update(id: number, updateFaqsectionDto: UpdateFaqsectionDto) {
    return `This action updates a #${id} faqsection`;
  }

  remove(id: number) {
    return this.faqsectionRespository.delete(id);
  }
}
