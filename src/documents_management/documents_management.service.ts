import { Injectable } from '@nestjs/common';
import { CreateDocumentDto } from './dto/create_document';
import { UpdateDocumentDto } from './dto/update_document';
import { Archive } from './entities/archive.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DocumentsManagementService {
    @InjectRepository(Archive) private archiveRepository: Repository<Archive>
    
    async create(createDocumentDto: CreateDocumentDto): Promise<Archive> {
        return this.archiveRepository.save(createDocumentDto);
    }

    async update(id: number, updateDocumentDto: UpdateDocumentDto): Promise<Archive> {
        await this.archiveRepository.update(id, updateDocumentDto);
        return this.archiveRepository.findOne({ where: { id } });
    }

    async findAll(): Promise<Archive[]> {
        return this.archiveRepository.find();
    }

    async findOne(id: number): Promise<Archive> {
        return this.archiveRepository.findOne({ where: { id } });
    }

    async remove(id: number): Promise<void> {
        await this.archiveRepository.delete(id);
    }
}