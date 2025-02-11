import { PartialType } from '@nestjs/swagger';
import { CreateProgressbarDto } from './create-progressbar.dto';

export class UpdateProgressbarDto extends PartialType(CreateProgressbarDto) {}
