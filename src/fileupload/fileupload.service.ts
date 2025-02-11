import { Injectable } from '@nestjs/common';
import { CreateFileuploadDto } from './dto/create-fileupload.dto';
import { UpdateFileuploadDto } from './dto/update-fileupload.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Fileupload } from './entities/fileupload.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FileuploadService {

  constructor(
    @InjectRepository(Fileupload) private readonly fileuploadRespository: Repository<Fileupload>,
  ) { }


  async fileuploadcreate(createFileuploadDto: CreateFileuploadDto) {
    const fileupload = this.fileuploadRespository.create(createFileuploadDto)
    return this.fileuploadRespository.save(fileupload);;
  }

  findAll() {
    return this.fileuploadRespository.find() ;
  }

  findOne(id: number) {
    return this.fileuploadRespository.findOne({
      where:{
        id:id,
      }
    });
  }

  update(id: number, updateFileuploadDto: UpdateFileuploadDto) {
    return `This action updates a #${id} fileupload`;
  }

  remove(id: number) {
    return this.fileuploadRespository.delete(id) ;
  }
}
