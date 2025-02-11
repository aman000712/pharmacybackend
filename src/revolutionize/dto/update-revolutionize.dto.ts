import { PartialType } from '@nestjs/swagger';
import { CreateRevolutionizeDto } from './create-revolutionize.dto';

export class UpdateRevolutionizeDto extends PartialType(CreateRevolutionizeDto) {}
