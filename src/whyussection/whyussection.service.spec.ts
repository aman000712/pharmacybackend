import { Test, TestingModule } from '@nestjs/testing';
import { WhyussectionService } from './whyussection.service';

describe('WhyussectionService', () => {
  let service: WhyussectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WhyussectionService],
    }).compile();

    service = module.get<WhyussectionService>(WhyussectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
