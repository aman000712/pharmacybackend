import { PartialType } from '@nestjs/swagger';
import { CreatePricingplanDto } from './create-pricingplan.dto';

export class UpdatePricingplanDto extends PartialType(CreatePricingplanDto) {}
