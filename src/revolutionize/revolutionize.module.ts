import { Module } from '@nestjs/common';
import { RevolutionizeService } from './revolutionize.service';
import { RevolutionizeController } from './revolutionize.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Revolutionize } from './entities/revolutionize.entity';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Module({

  imports:[
    TypeOrmModule.forFeature([
      Revolutionize,
      Fileupload
    ])
  ],


  controllers: [RevolutionizeController],
  providers: [RevolutionizeService],
})
export class RevolutionizeModule {}
