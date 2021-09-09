import { IsDefined, IsEmail, IsNumber, IsString } from "class-validator";

export class UserInfo {
    @IsString() 
    @IsDefined()
    username: string;

    @IsString()
    @IsDefined()
    @IsEmail()
    email: string;

    @IsNumber()
    @IsDefined()
    age: number;
}