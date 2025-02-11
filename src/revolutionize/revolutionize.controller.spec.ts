import { Test, TestingModule } from '@nestjs/testing';
import { RevolutionizeController } from './revolutionize.controller';
import { RevolutionizeService } from './revolutionize.service';

describe('RevolutionizeController', () => {
  let controller: RevolutionizeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RevolutionizeController],
      providers: [RevolutionizeService],
    }).compile();

    controller = module.get<RevolutionizeController>(RevolutionizeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
