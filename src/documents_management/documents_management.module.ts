import { Module } from '@nestjs/common';
import { Archive } from './entities/archive.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentsManagementService } from './documents_management.service';

@Module({
    imports: [TypeOrmModule.forFeature([Archive])],
    providers: [DocumentsManagementService],
    controllers: [],
    exports: [DocumentsManagementService],
})
export class DocumentsManagementModule {}
