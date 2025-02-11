import { Test, TestingModule } from '@nestjs/testing';
import { VisionsectionController } from './visionsection.controller';
import { VisionsectionService } from './visionsection.service';

describe('VisionsectionController', () => {
  let controller: VisionsectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VisionsectionController],
      providers: [VisionsectionService],
    }).compile();

    controller = module.get<VisionsectionController>(VisionsectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
