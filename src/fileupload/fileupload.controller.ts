import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileuploadService } from './fileupload.service';
import { CreateFileuploadDto } from './dto/create-fileupload.dto';
import { UpdateFileuploadDto } from './dto/update-fileupload.dto';
import { ApiConsumes } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { Storage } from 'src/utils/FileUpload.utils';
import { uploadToVercelBlob } from 'src/utils/Fileuploads.utils';

@Controller('fileupload')
export class FileuploadController {
  constructor(private readonly fileuploadService: FileuploadService) { }



  @Post()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image'))
  async create(@UploadedFile() image: Express.Multer.File, @Body() createFileuploadDto: CreateFileuploadDto) {
    if (!image) throw new Error('No file uploaded');

    const imageUrl = await uploadToVercelBlob(image);
    createFileuploadDto.image = imageUrl; // Store the file URL in DB

    return this.fileuploadService.fileuploadcreate(createFileuploadDto);
  }







  // @Post()
  // @ApiConsumes('multipart/form-data')
  // @UseInterceptors(FileInterceptor('image', Storage))
  // async create(@Body() createFileuploadDto: CreateFileuploadDto,
  // @UploadedFile()
  //   image: any
  // ) {
  //   console.log(process.env.UPLOAD_URL)
  //   let images = `${process.env.UPLOAD_URL}/uploads/${image.filename}`;
  //   createFileuploadDto.image = images
  //   console.log("Uploaded File:", image);
  //   return this.fileuploadService.fileuploadcreate(createFileuploadDto);
  // }

  @Get()
  findAll() {
    return this.fileuploadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fileuploadService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFileuploadDto: UpdateFileuploadDto) {
    return this.fileuploadService.update(+id, updateFileuploadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fileuploadService.remove(+id);
  }
}
