import { PartialType } from '@nestjs/swagger';
import { CreateDiscoverpointsectionDto } from './create-discoverpointsection.dto';

export class UpdateDiscoverpointsectionDto extends PartialType(CreateDiscoverpointsectionDto) {}
