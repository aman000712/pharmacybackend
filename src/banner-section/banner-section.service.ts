import { Injectable } from '@nestjs/common';
import { CreateBannerSectionDto } from './dto/create-banner-section.dto';
import { UpdateBannerSectionDto } from './dto/update-banner-section.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BannerSection } from './entities/banner-section.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BannerSectionService {

  constructor(
    @InjectRepository(BannerSection) private readonly bannerSectionRespository: Repository<BannerSection>,
  ) { }




  async bannersectioncreate(createBannerSectionDto: CreateBannerSectionDto) {
    const bannersection = this.bannerSectionRespository.create(createBannerSectionDto);
    return this.bannerSectionRespository.save(bannersection);
  }

  async findAll() {
    return this.bannerSectionRespository.find({
      relations: ['image']
    });
  }

  findOne(id: number) {
    return this.bannerSectionRespository.findOne({
      where:{
        id:id,
      },
      relations: ['image']
    });
  }

  update(id: number, updateBannerSectionDto: UpdateBannerSectionDto) {
    return `This action updates a #${id} bannerSection`;
  }

  remove(id: number) {
    return this.bannerSectionRespository.delete(id);
  }
}
