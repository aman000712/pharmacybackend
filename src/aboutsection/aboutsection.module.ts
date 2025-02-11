import { Module } from '@nestjs/common';
import { AboutsectionService } from './aboutsection.service';
import { AboutsectionController } from './aboutsection.controller';
import { Aboutsection } from './entities/aboutsection.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Module({


  imports:[

    TypeOrmModule.forFeature([
      Aboutsection,
      Fileupload
    ])

  ],



  controllers: [AboutsectionController],
  providers: [AboutsectionService],
})
export class AboutsectionModule {}
