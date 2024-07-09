import { IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateNotificationDto {
    @IsString()
    @IsOptional()
    content: string;

    @IsDate()
    @IsOptional()
    date: Date;
}