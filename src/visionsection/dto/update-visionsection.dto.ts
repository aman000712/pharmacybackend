import { PartialType } from '@nestjs/swagger';
import { CreateVisionsectionDto } from './create-visionsection.dto';

export class UpdateVisionsectionDto extends PartialType(CreateVisionsectionDto) {}
