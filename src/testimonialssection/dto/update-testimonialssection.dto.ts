import { PartialType } from '@nestjs/swagger';
import { CreateTestimonialssectionDto } from './create-testimonialssection.dto';

export class UpdateTestimonialssectionDto extends PartialType(CreateTestimonialssectionDto) {}
