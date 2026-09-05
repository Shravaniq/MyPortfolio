import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateExperienceDto {
  @IsNotEmpty()
  @IsString()
  role: string;

  @IsNotEmpty()
  @IsString()
  company: string;

  @IsNotEmpty()
  @IsString()
  location: string;

  @IsNotEmpty()
  @IsString()
  duration: string;

  @IsArray()
  @IsString({ each: true })
  points: string[];
}