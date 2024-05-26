import { IsUUID, IsString, IsEmail, IsBoolean, IsNumber } from 'class-validator';

export class FillDataDto {
  @IsUUID()
  uniqueld: string;

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsNumber()
  phonenumber: number;

  @IsBoolean()
  isGraduate: boolean;
}
