import { Test, TestingModule } from '@nestjs/testing';
import { TestimonialssectionController } from './testimonialssection.controller';
import { TestimonialssectionService } from './testimonialssection.service';

describe('TestimonialssectionController', () => {
  let controller: TestimonialssectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestimonialssectionController],
      providers: [TestimonialssectionService],
    }).compile();

    controller = module.get<TestimonialssectionController>(TestimonialssectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
