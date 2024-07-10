import { Field, InputType } from '@nestjs/graphql';
import { IsString, IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateTeamDto {
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
}