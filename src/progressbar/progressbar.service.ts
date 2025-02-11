import { Injectable } from '@nestjs/common';
import { CreateProgressbarDto } from './dto/create-progressbar.dto';
import { UpdateProgressbarDto } from './dto/update-progressbar.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Progressbar } from './entities/progressbar.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProgressbarService {

  constructor(
    @InjectRepository(Progressbar) private readonly progressbarRespository: Repository<Progressbar>,
  ){}


  async progressbarcreate(createProgressbarDto: CreateProgressbarDto) {
    const progressbar = this.progressbarRespository.create(createProgressbarDto);
    return this.progressbarRespository.save(progressbar);
  }

  findAll() {
    return this.progressbarRespository.find({
      relations: ['image']
    });
  }

  findOne(id: number) {
    return this.progressbarRespository.findOne({
      where:{
        id:id,
      },
      relations: ['image']
    });
  }

  update(id: number, updateProgressbarDto: UpdateProgressbarDto) {
    return `This action updates a #${id} progressbar`;
  }

  remove(id: number) {
    return this.progressbarRespository.delete(id);
  }
}
