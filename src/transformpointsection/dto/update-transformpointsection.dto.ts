import { PartialType } from '@nestjs/swagger';
import { CreateTransformpointsectionDto } from './create-transformpointsection.dto';

export class UpdateTransformpointsectionDto extends PartialType(CreateTransformpointsectionDto) {}
