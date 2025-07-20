import { IsNotEmpty, IsArray, IsString } from 'class-validator';

export class CreateCountryDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  price: string;

  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  category: string[] | string;

  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  region: string[] | string;
}