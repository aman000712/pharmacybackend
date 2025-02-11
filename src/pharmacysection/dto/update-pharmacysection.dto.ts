import { PartialType } from '@nestjs/swagger';
import { CreatePharmacysectionDto } from './create-pharmacysection.dto';

export class UpdatePharmacysectionDto extends PartialType(CreatePharmacysectionDto) {}
