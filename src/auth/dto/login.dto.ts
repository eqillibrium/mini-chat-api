import { IsString, MinLength, MaxLength } from 'class-validator';

export class LoginDto {
  @IsString()
  email: string;

  @MaxLength(15)
  @MinLength(5)
  @IsString()
  password: string;
}
