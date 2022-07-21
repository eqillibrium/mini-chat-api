import { IsString, MinLength, MaxLength } from 'class-validator';

export class RegisterDto {
  @MaxLength(15)
  @MinLength(2)
  @IsString()
  name: string;

  @IsString()
  email: string;

  @MaxLength(15)
  @MinLength(5)
  @IsString()
  password: string;
}
