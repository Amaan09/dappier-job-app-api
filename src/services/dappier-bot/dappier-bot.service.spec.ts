import { Test, TestingModule } from '@nestjs/testing';
import { DappierBotService } from './dappier-bot.service';

describe('DappierBotService', () => {
  let service: DappierBotService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DappierBotService],
    }).compile();

    service = module.get<DappierBotService>(DappierBotService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
