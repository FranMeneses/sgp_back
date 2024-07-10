import { Field, InputType } from '@nestjs/graphql';
import { IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateNotificationDto {
    @IsString()
    @IsOptional()
    @Field(() => String, { nullable: true })
    content: string;

    @IsDate()
    @IsOptional()
    @Field(() => Date, { nullable: true })
    date: Date;
}