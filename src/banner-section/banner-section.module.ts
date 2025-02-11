import { Module } from '@nestjs/common';
import { BannerSectionService } from './banner-section.service';
import { BannerSectionController } from './banner-section.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BannerSection } from './entities/banner-section.entity';

@Module({

  imports: [
    TypeOrmModule.forFeature([
      BannerSection
    ])
  ],


  controllers: [BannerSectionController],
  providers: [BannerSectionService],
})
export class BannerSectionModule { }
