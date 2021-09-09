import { IsDefined, IsEmail, IsNumber, IsString, Length } from "class-validator";

export class UserInfo {
    @IsString() 
    @IsDefined()
    @Length(4, 12)
    username: string;

    @IsString()
    @IsDefined()
    @IsEmail()
    email: string;

    @IsNumber()
    @IsDefined()
    age: number;
}