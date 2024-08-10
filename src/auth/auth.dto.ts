// src/auth/dto/create-user.dto.ts
import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class registerUserDto {
  @IsNotEmpty()
  @Length(3, 50)
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(8, 20)
  password: string;
}

export class loginUserDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(8, 20)
  password: string;
}
