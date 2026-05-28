import { Test, TestingModule } from '@nestjs/testing';
import { NginxController } from './nginx.controller';
import { NginxService } from './nginx.service';

describe('NginxController', () => {
  let controller: NginxController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NginxController],
      providers: [NginxService],
    }).compile();

    controller = module.get<NginxController>(NginxController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
