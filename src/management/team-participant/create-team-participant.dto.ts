import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateTeamParticipantDto {
    @IsNumber()
    @IsOptional()
    @Field(() => Number, { nullable: true })
    participantId: number;

    @IsNumber()
    @IsOptional()
    @Field(() => Number, { nullable: true })
    teamId: number;

    @IsNumber()
    @IsOptional()
    @Field(() => [Number], { nullable: true })
    taskId?: number[];

    @IsString()
    @IsNotEmpty()
    @Field(() => String)
    role: string;
}
