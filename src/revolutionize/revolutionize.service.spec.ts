import { Test, TestingModule } from '@nestjs/testing';
import { RevolutionizeService } from './revolutionize.service';

describe('RevolutionizeService', () => {
  let service: RevolutionizeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RevolutionizeService],
    }).compile();

    service = module.get<RevolutionizeService>(RevolutionizeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
