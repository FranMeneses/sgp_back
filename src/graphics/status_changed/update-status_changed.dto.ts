import { InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class UpdateStatusChangedDto {
    @IsNotEmpty()
    @IsString()
    previous_status: string;
    
    @IsNotEmpty()
    @IsString()
    actual_status: string;
}