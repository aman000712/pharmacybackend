import { Test, TestingModule } from '@nestjs/testing';
import { PricingplansService } from './pricingplans.service';

describe('PricingplansService', () => {
  let service: PricingplansService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PricingplansService],
    }).compile();

    service = module.get<PricingplansService>(PricingplansService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
