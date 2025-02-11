import { Test, TestingModule } from '@nestjs/testing';
import { WhyussectionController } from './whyussection.controller';
import { WhyussectionService } from './whyussection.service';

describe('WhyussectionController', () => {
  let controller: WhyussectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WhyussectionController],
      providers: [WhyussectionService],
    }).compile();

    controller = module.get<WhyussectionController>(WhyussectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
