import { Controller, Post, Body, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { CountryService } from './country.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Post()
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'mainImage', maxCount: 1 },
      { name: 'extraImg1', maxCount: 1 },
      { name: 'extraImg2', maxCount: 1 },
      { name: 'flag', maxCount: 1 },
    ])
  )
  create(
    @UploadedFiles() files: { mainImage?: Express.Multer.File[]; extraImg1?: Express.Multer.File[]; extraImg2?: Express.Multer.File[]; flag?: Express.Multer.File[] },
    @Body() createCountryDto: CreateCountryDto,
  ) {
    return this.countryService.create(files, createCountryDto);
  }
}
