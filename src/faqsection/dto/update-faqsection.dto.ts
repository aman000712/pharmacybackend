import { PartialType } from '@nestjs/swagger';
import { CreateFaqsectionDto } from './create-faqsection.dto';

export class UpdateFaqsectionDto extends PartialType(CreateFaqsectionDto) {}
