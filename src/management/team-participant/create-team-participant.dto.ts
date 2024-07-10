import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateTeamParticipantDto {
    @IsNumber()
    @IsOptional()
    @Field(() => Number, { nullable: true })
    id_participant: number;

    @IsNumber()
    @IsOptional()
    @Field(() => Number, { nullable: true })
    id_team: number;

    @IsNumber({}, { each: true })
    @IsOptional()
    @Field(() => [Number], { nullable: true })
    id_task?: number[];

    @IsString()
    @IsNotEmpty()
    @Field(() => String)
    role: string;
}
