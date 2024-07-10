import { InputType } from '@nestjs/graphql';
import { IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateNotificationDto {
    @IsString()
    @IsOptional()
    content: string;

    @IsDate()
    @IsOptional()
    date: Date;
}