import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsDate, IsNumber, IsNegative, IsOptional } from 'class-validator';
import { Task } from 'src/management/task/task.entity';

@InputType()
export class CreateStatusChangedDto {
    @IsNotEmpty()
    @IsNumber()
    @Field(() => Number)
    id: number;

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