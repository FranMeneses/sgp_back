import { Test, TestingModule } from '@nestjs/testing';
import { TeamParticipantController } from './team-participant.controller';
import { TeamParticipantService } from './team-participant.service';

describe('TeamParticipantController', () => {
  let controller: TeamParticipantController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TeamParticipantController],
      providers: [TeamParticipantService],
    }).compile();

    controller = module.get<TeamParticipantController>(TeamParticipantController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
