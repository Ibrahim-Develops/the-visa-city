import { Transform } from 'class-transformer';
import { IsArray, IsOptional } from 'class-validator';

export class UpdateCountryDto {
  @IsOptional()
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      return value.split(',').map((v: string) => v.trim());
    }
    return value;
  })
  @IsArray()
  category?: string[];

  @IsOptional()
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      return value.split(',').map((v: string) => v.trim());
    }
    return value;
  })
  @IsArray()
  region?: string[];

}