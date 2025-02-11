import { Test, TestingModule } from '@nestjs/testing';
import { TailoredService } from './tailored.service';

describe('TailoredService', () => {
  let service: TailoredService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TailoredService],
    }).compile();

    service = module.get<TailoredService>(TailoredService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
