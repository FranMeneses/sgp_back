import { Field, InputType } from '@nestjs/graphql';
import { IsString, IsOptional, IsDate, IsInt } from 'class-validator';

@InputType()
export class UpdateTaskDto {
    @IsOptional()
    @IsString()
    @Field(() => String, { nullable: true })
    name?: string;

    @IsOptional()
    @IsString()
    @Field(() => String, { nullable: true })
    description?: string;

    @IsOptional()
    @IsString()
    @Field(() => String, { nullable: true })
    status?: string;

    @IsOptional()
    @IsDate()
    @Field(() => Date, { nullable: true })
    start_date?: Date;

    @IsOptional()
    @IsDate()
    @Field(() => Date, { nullable: true })
    end_date?: Date;

    @IsOptional()
    @IsInt()
    @Field(() => Number, { nullable: true })
    projectId?: number;
}