import { Module } from '@nestjs/common';
import { TailoredService } from './tailored.service';
import { TailoredController } from './tailored.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tailored } from './entities/tailored.entity';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Module({


  imports:[
    TypeOrmModule.forFeature([
      Tailored,
      Fileupload,
    ])
  ],


  controllers: [TailoredController],
  providers: [TailoredService],
})
export class TailoredModule {}
