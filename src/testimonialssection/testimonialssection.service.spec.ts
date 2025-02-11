import { Test, TestingModule } from '@nestjs/testing';
import { TestimonialssectionService } from './testimonialssection.service';

describe('TestimonialssectionService', () => {
  let service: TestimonialssectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestimonialssectionService],
    }).compile();

    service = module.get<TestimonialssectionService>(TestimonialssectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
