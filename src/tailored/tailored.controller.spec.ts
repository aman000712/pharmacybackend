import { Test, TestingModule } from '@nestjs/testing';
import { TailoredController } from './tailored.controller';
import { TailoredService } from './tailored.service';

describe('TailoredController', () => {
  let controller: TailoredController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TailoredController],
      providers: [TailoredService],
    }).compile();

    controller = module.get<TailoredController>(TailoredController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
