import { Test, TestingModule } from '@nestjs/testing';
import { TeamParticipantService } from './team-participant.service';

describe('TeamParticipantService', () => {
  let service: TeamParticipantService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TeamParticipantService],
    }).compile();

    service = module.get<TeamParticipantService>(TeamParticipantService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
