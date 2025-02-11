import { Test, TestingModule } from '@nestjs/testing';
import { ProgressbarController } from './progressbar.controller';
import { ProgressbarService } from './progressbar.service';

describe('ProgressbarController', () => {
  let controller: ProgressbarController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProgressbarController],
      providers: [ProgressbarService],
    }).compile();

    controller = module.get<ProgressbarController>(ProgressbarController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
