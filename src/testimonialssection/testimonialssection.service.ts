import { Injectable } from '@nestjs/common';
import { CreateTestimonialssectionDto } from './dto/create-testimonialssection.dto';
import { UpdateTestimonialssectionDto } from './dto/update-testimonialssection.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Testimonialssection } from './entities/testimonialssection.entity';
import { Repository } from 'typeorm';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Injectable()
export class TestimonialssectionService {

  constructor(
    @InjectRepository(Testimonialssection) private readonly testimonialssectionRespository: Repository<Testimonialssection>,
  ) { }


  async testimonialscreate(createTestimonialssectionDto: CreateTestimonialssectionDto) {
    const testimonialssection = this.testimonialssectionRespository.create(createTestimonialssectionDto);
    if (createTestimonialssectionDto.testimonialimage) {
      const testimonialimage = await this.testimonialssectionRespository.manager.findOne(
        Fileupload, {
        where: {
          id: createTestimonialssectionDto.testimonialimage
        }
      }
      );
      if (!testimonialimage) {
        throw new Error('image not found');
      }
    }
    return this.testimonialssectionRespository.save(testimonialssection);
  }

  findAll() {
    return this.testimonialssectionRespository.find({
      relations: ['testimonialimage']
    });
  }

  findOne(id: number) {
    return this.testimonialssectionRespository.findOne({
      where: {
        id: id
      },
      relations: ['testimonialimage']
    });
  }

  update(id: number, updateTestimonialssectionDto: UpdateTestimonialssectionDto) {
    return `This action updates a #${id} testimonialssection`;
  }

  remove(id: number) {
    return this.testimonialssectionRespository.delete(id);
  }
}
