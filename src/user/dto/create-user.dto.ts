import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

const USERNAME_REGEX = /^[a-zA-Z0-9_-]{4,24}$/;

export class CreateUserDto {
  @IsString({ message: 'Name must be a string' })
  name: string;

  @IsString({ message: 'Email needs to be a string' })
  @IsEmail({}, { message: 'You need to provide a valid email' })
  email: string;

  @IsString({ message: 'Username needs to be a string' })
  @MinLength(4, { message: 'Min username length is 4' })
  @MaxLength(24, { message: 'Max username length is 24' })
  @Matches(USERNAME_REGEX, {
    message: 'Invalid username',
  })
  username: string;

  @IsString({ message: 'Password needs to be a string' })
  @MinLength(6, { message: 'Min password length is 6' })
  @MaxLength(24, { message: 'Max password length is 24' })
  password: string;
}
