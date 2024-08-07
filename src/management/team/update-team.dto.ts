import { Field, InputType } from '@nestjs/graphql';
import { IsString, IsOptional, IsNumber } from 'class-validator';

@InputType()
export class UpdateTeamDto {
	@IsOptional()
	@IsString()
	@Field(() => String)
	name: string;

	@IsOptional()
	@IsString()
	@Field(() => String)
	type: string;

	@IsOptional()
	@IsString()
	@Field(() => String)
	description: string;

	@IsOptional()
	@IsNumber()
	@Field(() => Number)
	projectId: number;
}