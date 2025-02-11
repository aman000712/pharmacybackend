import { Module } from '@nestjs/common';
import { FaqsectionService } from './faqsection.service';
import { FaqsectionController } from './faqsection.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Faqsection } from './entities/faqsection.entity';

@Module({


  imports: [
    TypeOrmModule.forFeature([
      Faqsection
    ])
  ],

  controllers: [FaqsectionController],
  providers: [FaqsectionService],
})
export class FaqsectionModule { }
