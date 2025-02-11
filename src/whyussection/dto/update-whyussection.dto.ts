import { PartialType } from '@nestjs/swagger';
import { CreateWhyussectionDto } from './create-whyussection.dto';

export class UpdateWhyussectionDto extends PartialType(CreateWhyussectionDto) {}
