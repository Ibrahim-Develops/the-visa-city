import { IsArray, IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Transform, Type } from 'class-transformer';

export class CreateCountryDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  price: string;

  @Transform(({ value }) => {
    if (typeof value === 'string') {
      return value.split(',').map((v: string) => v.trim()).filter(Boolean);
    }
    return value;
  })
  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  category: string[];

  @Transform(({ value }) => {
    if (typeof value === 'string') {
      return value.split(',').map((v: string) => v.trim()).filter(Boolean);
    }
    return value;
  })
  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  region: string[];
}
