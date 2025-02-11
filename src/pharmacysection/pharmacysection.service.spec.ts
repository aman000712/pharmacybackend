import { Test, TestingModule } from '@nestjs/testing';
import { PharmacysectionService } from './pharmacysection.service';

describe('PharmacysectionService', () => {
  let service: PharmacysectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PharmacysectionService],
    }).compile();

    service = module.get<PharmacysectionService>(PharmacysectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
