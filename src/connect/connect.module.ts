import { Module } from '@nestjs/common';
import { ConnectService } from './connect.service';
import { ConnectController } from './connect.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connect } from './entities/connect.entity';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Module({

  imports:[
    TypeOrmModule.forFeature([
      Connect,
      Fileupload,
    ])
  ],


  controllers: [ConnectController],
  providers: [ConnectService],
})
export class ConnectModule {}
