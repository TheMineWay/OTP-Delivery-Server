import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateAccountDTO {
  @IsString()
  @IsNotEmpty()
  @MaxLength(32)
  code: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(16)
  @MaxLength(256)
  passwordHash: string;
}
