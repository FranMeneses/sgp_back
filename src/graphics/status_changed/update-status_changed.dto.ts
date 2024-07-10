import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class UpdateStatusChangedDto {
    @IsNotEmpty()
    @IsString()
    @Field(() => String)
    previous_status: string;
    
    @IsNotEmpty()
    @IsString()
    @Field(() => String)
    actual_status: string;
}