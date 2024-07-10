import { Field, InputType } from '@nestjs/graphql';
import { IsString, IsDate, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

@InputType()
export class CreateMeetingDto {
    @IsNotEmpty()
    @IsString()
    @Field(() => String)
    name: string;

    @IsNotEmpty()
    @IsString()
    @Field(() => String)
    description: string;

    @IsNotEmpty()
    @IsDate()
    @Field(() => Date)
    date: Date;

    @IsOptional()
    @IsNumber()
    @Field(() => Number, { nullable: true })
    projectId: number;

    @IsOptional()
    @IsNumber()
    @Field(() => Number, { nullable: true })
    participantIds: number[];
}