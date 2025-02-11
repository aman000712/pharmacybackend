import { Module } from '@nestjs/common';
import { ProgressbarService } from './progressbar.service';
import { ProgressbarController } from './progressbar.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Progressbar } from './entities/progressbar.entity';

@Module({

  imports: [
    TypeOrmModule.forFeature([
      Progressbar
    ])
  ],


  controllers: [ProgressbarController],
  providers: [ProgressbarService],
})
export class ProgressbarModule { }
