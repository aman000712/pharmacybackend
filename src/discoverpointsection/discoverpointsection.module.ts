import { Module } from '@nestjs/common';
import { DiscoverpointsectionService } from './discoverpointsection.service';
import { DiscoverpointsectionController } from './discoverpointsection.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Discoverpointsection } from './entities/discoverpointsection.entity';

@Module({


  imports: [

    TypeOrmModule.forFeature([
      Discoverpointsection,
    ]),

  ],


  controllers: [DiscoverpointsectionController],
  providers: [DiscoverpointsectionService],
})
export class DiscoverpointsectionModule { }
