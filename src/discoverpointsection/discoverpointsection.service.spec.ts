import { Test, TestingModule } from '@nestjs/testing';
import { DiscoverpointsectionService } from './discoverpointsection.service';

describe('DiscoverpointsectionService', () => {
  let service: DiscoverpointsectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DiscoverpointsectionService],
    }).compile();

    service = module.get<DiscoverpointsectionService>(DiscoverpointsectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
