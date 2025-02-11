import { Test, TestingModule } from '@nestjs/testing';
import { PharmacysectionController } from './pharmacysection.controller';
import { PharmacysectionService } from './pharmacysection.service';

describe('PharmacysectionController', () => {
  let controller: PharmacysectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PharmacysectionController],
      providers: [PharmacysectionService],
    }).compile();

    controller = module.get<PharmacysectionController>(PharmacysectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
