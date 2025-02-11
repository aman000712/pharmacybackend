import { Module } from '@nestjs/common';
import { VisionsectionService } from './visionsection.service';
import { VisionsectionController } from './visionsection.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Visionsection } from './entities/visionsection.entity';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Module({

  imports: [
    TypeOrmModule.forFeature([
      Visionsection,
      Fileupload,
    ])
  ],


  controllers: [VisionsectionController],
  providers: [VisionsectionService],
})
export class VisionsectionModule { }
