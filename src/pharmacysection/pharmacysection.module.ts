import { Module } from '@nestjs/common';
import { PharmacysectionService } from './pharmacysection.service';
import { PharmacysectionController } from './pharmacysection.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pharmacysection } from './entities/pharmacysection.entity';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Module({

  imports: [
    TypeOrmModule.forFeature([
      Pharmacysection,
      Fileupload,
    ]),
  ],


  controllers: [PharmacysectionController],
  providers: [PharmacysectionService],
})
export class PharmacysectionModule { }
