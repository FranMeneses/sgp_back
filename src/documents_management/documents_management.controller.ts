import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { DocumentsManagementService } from './documents_management.service';
import { CreateDocumentDto } from './dto/create_document';
import { UpdateDocumentDto } from './dto/update_document';

@Controller('documents-management')
export class DocumentsManagementController {
    constructor(private readonly documentsManagementService: DocumentsManagementService) {}

    @Post()
    create(@Body() createDocumentDto: CreateDocumentDto) {
        return this.documentsManagementService.create(createDocumentDto);
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() updateDocumentDto: UpdateDocumentDto) {
        return this.documentsManagementService.update(id, updateDocumentDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number){
        return this.documentsManagementService.remove(id);
    }

    @Get()
    findAll() {
        return this.documentsManagementService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number){
        return this.documentsManagementService.findOne(id);
    }

}
