import { Test, TestingModule } from '@nestjs/testing';
import { TransformpointsectionController } from './transformpointsection.controller';
import { TransformpointsectionService } from './transformpointsection.service';

describe('TransformpointsectionController', () => {
  let controller: TransformpointsectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransformpointsectionController],
      providers: [TransformpointsectionService],
    }).compile();

    controller = module.get<TransformpointsectionController>(TransformpointsectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
