import { IsEmail, IsNumber, IsOptional, IsString } from "class-validator";

export class NewInfo {

    @IsString()
    @IsOptional()
    username: string;

    @IsString()
    @IsEmail()
    @IsOptional()
    email: string;

    @IsNumber()
    @IsOptional()
    age: number;
}