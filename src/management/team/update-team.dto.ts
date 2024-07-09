import { IsString, IsNotEmpty } from 'class-validator';

export class UpdateTeamDto {
	@IsNotEmpty()
	@IsString()
	name: string;

	@IsNotEmpty()
	@IsString()
	type: string;

	@IsNotEmpty()
	@IsString()
	description: string;
}