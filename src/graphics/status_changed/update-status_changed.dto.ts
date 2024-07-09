import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateStatusChangedDto {
    @IsNotEmpty()
    @IsString()
    previous_status: string;
    
    @IsNotEmpty()
    @IsString()
    actual_status: string;
}