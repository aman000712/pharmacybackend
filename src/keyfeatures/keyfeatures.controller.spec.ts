import { Test, TestingModule } from '@nestjs/testing';
import { KeyfeaturesController } from './keyfeatures.controller';
import { KeyfeaturesService } from './keyfeatures.service';

describe('KeyfeaturesController', () => {
  let controller: KeyfeaturesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KeyfeaturesController],
      providers: [KeyfeaturesService],
    }).compile();

    controller = module.get<KeyfeaturesController>(KeyfeaturesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
