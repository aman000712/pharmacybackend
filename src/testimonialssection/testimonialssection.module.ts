import { Module } from '@nestjs/common';
import { TestimonialssectionService } from './testimonialssection.service';
import { TestimonialssectionController } from './testimonialssection.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Testimonialssection } from './entities/testimonialssection.entity';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Module({

  imports: [
    TypeOrmModule.forFeature([
      Testimonialssection,
      Fileupload
    ])
  ],


  controllers: [TestimonialssectionController],
  providers: [TestimonialssectionService],
})
export class TestimonialssectionModule { }
