import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsDate, IsNumber, IsOptional } from 'class-validator';

@InputType()
export class CreateStatusChangedDto {
    @IsNotEmpty()
    @IsDate()
    @Field(() => Date)
    date: Date;
    
    @IsNotEmpty()
    @IsString()
    @Field(() => String)
    previous_status: string;
    
    @IsNotEmpty()
    @IsString()
    @Field(() => String)
    actual_status: string;
    
    @IsOptional()
    @IsNumber()
    @Field(() => Number, { nullable: true })
    taskId: Number;
}