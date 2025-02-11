import { Module } from '@nestjs/common';
import { TransformpointsectionService } from './transformpointsection.service';
import { TransformpointsectionController } from './transformpointsection.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transformpointsection } from './entities/transformpointsection.entity';

@Module({

  imports: [
    TypeOrmModule.forFeature([
      Transformpointsection
    ])
  ],


  controllers: [TransformpointsectionController],
  providers: [TransformpointsectionService],
})
export class TransformpointsectionModule {}
