import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class StepItemDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    description: string;
}

export class CreateStepDto {
    @IsString()
    @IsNotEmpty()
    countryId: number;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => StepItemDto)
    steps: StepItemDto[];
}
