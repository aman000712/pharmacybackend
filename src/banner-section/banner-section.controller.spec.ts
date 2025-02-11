import { Test, TestingModule } from '@nestjs/testing';
import { BannerSectionController } from './banner-section.controller';
import { BannerSectionService } from './banner-section.service';

describe('BannerSectionController', () => {
  let controller: BannerSectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BannerSectionController],
      providers: [BannerSectionService],
    }).compile();

    controller = module.get<BannerSectionController>(BannerSectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
