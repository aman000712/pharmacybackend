import { Test, TestingModule } from '@nestjs/testing';
import { FaqsectionController } from './faqsection.controller';
import { FaqsectionService } from './faqsection.service';

describe('FaqsectionController', () => {
  let controller: FaqsectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FaqsectionController],
      providers: [FaqsectionService],
    }).compile();

    controller = module.get<FaqsectionController>(FaqsectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
