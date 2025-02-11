import { Test, TestingModule } from '@nestjs/testing';
import { TransformpointsectionService } from './transformpointsection.service';

describe('TransformpointsectionService', () => {
  let service: TransformpointsectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransformpointsectionService],
    }).compile();

    service = module.get<TransformpointsectionService>(TransformpointsectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
