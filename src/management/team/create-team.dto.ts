import { Field, InputType } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

@InputType()
export class CreateTeamDto {
    @IsNotEmpty()
    @IsString()
    @Field(() => String)
    name: string;

    @IsNotEmpty()
    @IsString()
    @Field(() => String)
    type: string;

    @IsNotEmpty()
    @IsString()
    @Field(() => String)
    description: string;

    @IsNotEmpty()
    @IsNumber()
    @Field(() => Number)
    projectId: number;
}