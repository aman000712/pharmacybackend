import { PartialType } from '@nestjs/swagger';
import { CreateTailoredDto } from './create-tailored.dto';

export class UpdateTailoredDto extends PartialType(CreateTailoredDto) {}
