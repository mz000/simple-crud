import { IsEmail, IsNumber, IsOptional, IsString, Length } from "class-validator";

export class NewInfo {

    @IsString()
    @IsOptional()
    @Length(4, 12)
    username: string;

    @IsString()
    @IsEmail()
    @IsOptional()
    email: string;

    @IsNumber()
    @IsOptional()
    age: number;
}