import { Test, TestingModule } from '@nestjs/testing';
import { ProjectService } from './project.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Project } from './project.entity';
import { Repository } from 'typeorm';
import { CreateProjectDto } from './create-project.dto';

describe('ProjectService', () => {
  let service: ProjectService;
  let repository: Repository<Project>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProjectService,
        {
          provide: getRepositoryToken(Project),
          useValue: {
            create: jest.fn(),
            save: jest.fn(),
            find: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<ProjectService>(ProjectService);
    repository = module.get<Repository<Project>>(getRepositoryToken(Project));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should successfully insert a project', async () => {
      const projectDto: CreateProjectDto = {
        name: 'Test Project',
        amount_participants: 5,
        start_date: new Date('2023-01-01'),
        end_date: new Date('2023-12-31')
      };
      const project = { id: 1, ...projectDto };
  
      jest.spyOn(repository, 'create').mockReturnValue(project);
      jest.spyOn(repository, 'save').mockResolvedValue(project);
  
      expect(await service.create('createAction', projectDto)).toEqual(project);
      expect(repository.create).toHaveBeenCalledWith(projectDto);
      expect(repository.save).toHaveBeenCalledWith(project);
    });
  });

  describe('findAll', () => {
    it('should return an array of projects', async () => {
      const expectedProjects = [
        { 
          id: 1, 
          name: 'Test Project 1', 
          start_date: new Date('2023-01-01'), 
          end_date: new Date('2023-12-31'),
          amount_participants: 10
        },
        { 
          id: 2, 
          name: 'Test Project 2', 
          start_date: new Date('2023-02-01'), 
          end_date: new Date('2023-11-30'),
          amount_participants: 20
        }
      ];
  
      jest.spyOn(repository, 'find').mockResolvedValue(expectedProjects);
  
      expect(await service.findAll('findAllAction')).toEqual(expectedProjects);
      expect(repository.find).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a project by ID', async () => {
      const projectId = 1;
      const expectedProject = { 
        id: projectId, 
        name: 'Test Project', 
        start_date: new Date('2023-01-01'), 
        end_date: new Date('2023-12-31'),
        amount_participants: 0
      };
  
      jest.spyOn(repository, 'findOne').mockResolvedValue(expectedProject);
  
      expect(await service.findOne('findOneAction', projectId)).toEqual(expectedProject);
      expect(repository.findOne).toHaveBeenCalledWith({ where: { id: projectId } });
    });
  });

  describe('update', () => {
    it('should update a project', async () => {
      const projectId = 1;
      const updateDto = {
        name: 'Updated Project Name',
        amount_participants: 15
      };
      const existingProject = {
        id: projectId,
        name: 'Test Project 1',
        start_date: new Date('2023-01-01'),
        end_date: new Date('2023-12-31'),
        amount_participants: 10
      };
      const updatedProject = {
        ...existingProject,
        ...updateDto
      };
  
      jest.spyOn(repository, 'findOne').mockResolvedValue(existingProject);
      jest.spyOn(repository, 'save').mockResolvedValue(updatedProject);
  
      expect(await service.update('updateAction', projectId, updateDto)).toEqual(updatedProject);
      expect(repository.findOne).toHaveBeenCalledWith(projectId);
      expect(repository.save).toHaveBeenCalledWith(updatedProject);
    });
  });
});