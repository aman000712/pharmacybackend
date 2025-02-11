import { Module } from '@nestjs/common';
import { FileuploadService } from './fileupload.service';
import { FileuploadController } from './fileupload.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fileupload } from './entities/fileupload.entity';

@Module({


  imports:[

    TypeOrmModule.forFeature([
      Fileupload
    ])

  ],


  controllers: [FileuploadController],
  providers: [FileuploadService],
})
export class FileuploadModule {}
