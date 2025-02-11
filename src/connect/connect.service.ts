import { Injectable } from '@nestjs/common';
import { CreateConnectDto } from './dto/create-connect.dto';
import { UpdateConnectDto } from './dto/update-connect.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Connect } from './entities/connect.entity';
import { Repository } from 'typeorm';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Injectable()
export class ConnectService {


  constructor(

    @InjectRepository(Connect) private readonly connectRespository: Repository<Connect>,

  ) { }

  async connectcreate(createConnectDto: CreateConnectDto) {
    const connect = this.connectRespository.create(createConnectDto);
    if (createConnectDto.image) {
      const image = await this.connectRespository.manager.findOne(
        Fileupload, {
        where: {
          id: createConnectDto.image
        }
      }
      );
      if (!image) {
        throw new Error("image not found");
      }
    }
    return this.connectRespository.save(connect);
  }

  async findAll() {
    return this.connectRespository.find({
      relations: ['image']
    });
  }

  findOne(id: number) {
    return this.connectRespository.findOne({
      where: {
        id: id
      },
      relations: ['image']
    });
  }

  update(id: number, updateConnectDto: UpdateConnectDto) {
    return `This action updates a #${id} connect`;
  }

  remove(id: number) {
    return this.connectRespository.delete(id);
  }
}
