import { IsString, IsUUID, IsEmail, IsBoolean, IsNumber } from 'class-validator';

export class CreateFormDto {
  @IsUUID()
  uniqueld: string;

  @IsString()
  title: string;

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsNumber()
  phonenumber: number;

  @IsBoolean()
  isGraduate: boolean;
}
