import { PartialType } from '@nestjs/swagger';
import { CreateBannerSectionDto } from './create-banner-section.dto';

export class UpdateBannerSectionDto extends PartialType(CreateBannerSectionDto) {}
