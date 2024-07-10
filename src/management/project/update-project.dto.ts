import { IsOptional, IsString, IsNumber, IsDate } from 'class-validator';
import { Type } from 'class-transformer';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateProjectDto {
    @IsOptional()
    @IsString()
    @Field(() => String, { nullable: true })
    name?: string;

    @IsOptional()
    @IsNumber()
    @Field(() => Number, { nullable: true })
    amount_participants?: number;

    @IsOptional()
    @Type(() => Date)
    @IsDate()
    @Field(() => Date, { nullable: true })
    start_date?: Date;

    @IsOptional()
    @Type(() => Date)
    @IsDate()
    @Field(() => Date, { nullable: true })
    end_date?: Date;
}