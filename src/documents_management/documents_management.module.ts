import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentsManagementService } from './documents_management.service';

@Module({
    imports: [],
    providers: [DocumentsManagementService],
    controllers: [],
    exports: [DocumentsManagementService],
})
export class DocumentsManagementModule {}
