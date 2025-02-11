import { Test, TestingModule } from '@nestjs/testing';
import { ProgressbarService } from './progressbar.service';

describe('ProgressbarService', () => {
  let service: ProgressbarService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProgressbarService],
    }).compile();

    service = module.get<ProgressbarService>(ProgressbarService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
