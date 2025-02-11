import { Test, TestingModule } from '@nestjs/testing';
import { VisionsectionService } from './visionsection.service';

describe('VisionsectionService', () => {
  let service: VisionsectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VisionsectionService],
    }).compile();

    service = module.get<VisionsectionService>(VisionsectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
