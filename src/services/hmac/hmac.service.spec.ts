import { Test, TestingModule } from '@nestjs/testing';
import { HmacService } from './hmac.service';

describe('HmacService', () => {
  let service: HmacService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HmacService],
    }).compile();

    service = module.get<HmacService>(HmacService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
