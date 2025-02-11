import { Module } from '@nestjs/common';
import { KeyfeaturesService } from './keyfeatures.service';
import { KeyfeaturesController } from './keyfeatures.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Keyfeature } from './entities/keyfeature.entity';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Module({

  imports: [
    TypeOrmModule.forFeature([
      Keyfeature,
      Fileupload
    ])
  ],


  controllers: [KeyfeaturesController],
  providers: [KeyfeaturesService],
})
export class KeyfeaturesModule { }
