import { Test, TestingModule } from '@nestjs/testing';
import { FaqsectionService } from './faqsection.service';

describe('FaqsectionService', () => {
  let service: FaqsectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FaqsectionService],
    }).compile();

    service = module.get<FaqsectionService>(FaqsectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
