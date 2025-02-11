import { Test, TestingModule } from '@nestjs/testing';
import { KeyfeaturesService } from './keyfeatures.service';

describe('KeyfeaturesService', () => {
  let service: KeyfeaturesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KeyfeaturesService],
    }).compile();

    service = module.get<KeyfeaturesService>(KeyfeaturesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
