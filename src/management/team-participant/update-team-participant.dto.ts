import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateTeamParticipantDto {
    @IsString()
    @IsOptional()
    @Field(() => String, { nullable: true })
    role?: string;
}