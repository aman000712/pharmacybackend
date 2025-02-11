import { Test, TestingModule } from '@nestjs/testing';
import { DiscoverpointsectionController } from './discoverpointsection.controller';
import { DiscoverpointsectionService } from './discoverpointsection.service';

describe('DiscoverpointsectionController', () => {
  let controller: DiscoverpointsectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiscoverpointsectionController],
      providers: [DiscoverpointsectionService],
    }).compile();

    controller = module.get<DiscoverpointsectionController>(DiscoverpointsectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
