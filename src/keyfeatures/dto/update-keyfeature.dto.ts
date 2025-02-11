import { PartialType } from '@nestjs/swagger';
import { CreateKeyfeatureDto } from './create-keyfeature.dto';

export class UpdateKeyfeatureDto extends PartialType(CreateKeyfeatureDto) {}
