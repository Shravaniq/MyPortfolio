import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateMessageDto {
  @IsNotEmpty({ message: 'Name is required' })
  @MaxLength(100)
  name: string;

  @IsEmail({}, { message: 'A valid email is required' })
  email: string;

  @IsNotEmpty({ message: 'Message is required' })
  @MinLength(10, { message: 'Message must be at least 10 characters' })
  @MaxLength(2000)
  message: string;
}