import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';


@Injectable()
export class DocumentsManagementService {
    
    async uploadFile(file: Express.Multer.File): Promise<string> {
        return new Promise((resolve, reject) => {
          cloudinary.uploader.upload_stream({ resource_type: 'raw' }, (error, result) => {
            if (error) return reject(error);
            resolve(result.secure_url);
          }).end(file.buffer);
        });
    }

    async downloadFile(fileUrl: string): Promise<string> {
        return new Promise((resolve, reject) => {
          cloudinary.api.resource(fileUrl, (error, result) => {
            if (error) return reject(error);
            resolve(result.secure_url);
          });
        });
    }

    async getDocuments(): Promise<{name: string, url: string}[]> {
        return new Promise((resolve, reject) => {
          cloudinary.api.resources({ type: 'upload' }, (error, result) => {
            if (error) return reject(error);
            // Mapea cada recurso a un objeto que contiene el nombre (public_id) y la URL segura (secure_url)
            const documents = result.resources.map((resource) => ({
              name: resource.public_id,
              url: resource.secure_url
            }));
            resolve(documents);
          });
        });
    }
}