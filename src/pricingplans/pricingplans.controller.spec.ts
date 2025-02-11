import { Test, TestingModule } from '@nestjs/testing';
import { PricingplansController } from './pricingplans.controller';
import { PricingplansService } from './pricingplans.service';

describe('PricingplansController', () => {
  let controller: PricingplansController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PricingplansController],
      providers: [PricingplansService],
    }).compile();

    controller = module.get<PricingplansController>(PricingplansController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
