import { Module } from '@nestjs/common';
import { WhyussectionService } from './whyussection.service';
import { WhyussectionController } from './whyussection.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Whyussection } from './entities/whyussection.entity';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Module({

  imports:[
    TypeOrmModule.forFeature([
      Whyussection,
      Fileupload,
    ])
  ],


  controllers: [WhyussectionController],
  providers: [WhyussectionService],
})
export class WhyussectionModule {}
