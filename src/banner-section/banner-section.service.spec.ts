import { Test, TestingModule } from '@nestjs/testing';
import { BannerSectionService } from './banner-section.service';

describe('BannerSectionService', () => {
  let service: BannerSectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BannerSectionService],
    }).compile();

    service = module.get<BannerSectionService>(BannerSectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
