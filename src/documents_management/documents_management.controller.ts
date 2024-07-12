import { Controller, Post, UploadedFile, UseInterceptors, Body } from '@nestjs/common';
import { DocumentsManagementService } from './documents_management.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('documents-management')
export class DocumentsManagementController {
    constructor(private readonly documentsManagementService: DocumentsManagementService) {}

    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(@UploadedFile() file) {
      const url = await this.documentsManagementService.uploadFile(file);
      return { url };
    }

    @Post('download')
    async downloadFile(@Body('fileUrl') fileUrl: string) {
      const url = await this.documentsManagementService.downloadFile(fileUrl);
      return { url };
    }

    @Post('list')
    async getDocuments() {
      const documents = await this.documentsManagementService.getDocuments();
      return { documents };
    }
}