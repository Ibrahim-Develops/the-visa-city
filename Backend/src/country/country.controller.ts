import { Controller, Post, Body, UploadedFiles, UseInterceptors, Delete, Param, Get, Query, Put, Patch } from '@nestjs/common';
import { CountryService } from './country.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { apiResponse } from 'src/helper';
import { ApiBearerAuth } from '@nestjs/swagger';
import { UpdateCountryDto } from './dto/update-country.dto';

@ApiBearerAuth()
@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) { }

  @Post('create')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'mainImage' },
      { name: 'extraImg1' },
      { name: 'extraImg2' },
      { name: 'flag' },
    ])
  )
  create(
    @UploadedFiles() files: { mainImage?: Express.Multer.File[]; extraImg1?: Express.Multer.File[]; extraImg2?: Express.Multer.File[]; flag?: Express.Multer.File[] },
    @Body() createCountryDto: CreateCountryDto,
  ) {
    return this.countryService.create(files, createCountryDto);
  }

  @Get('filter')
  async filterCountries(
    @Query('category') category?: string,
    @Query('region') region?: string,
  ) {
    const countries = await this.countryService.filterCountries(category, region)
    return apiResponse(true, 'Countries fetched successfully with filters', countries);
  }

  @Get('all')
  async findAll() {
    const countries = await this.countryService.findAll()
    return apiResponse(true, 'All countries fetched successfully', countries);
  }

  @Patch('update/:id')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'mainImage', maxCount: 1 },
      { name: 'extraImg1', maxCount: 1 },
      { name: 'extraImg2', maxCount: 1 },
      { name: 'flag', maxCount: 1 },
    ])
  )
  async update(
    @Param('id') id: string,
    @UploadedFiles() files: { mainImage?: Express.Multer.File[]; extraImg1?: Express.Multer.File[]; extraImg2?: Express.Multer.File[]; flag?: Express.Multer.File[] },
    @Body() updateCountryDto: UpdateCountryDto,
  ) {
    const updated = await this.countryService.update(+id, updateCountryDto, files);
    return apiResponse(true, 'Country updated successfully', updated);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const country = await this.countryService.findOne(+id);
    return apiResponse(true, `Country with ID ${id} fetched successfully`, country);
  }

  @Delete('delete/:id')
  async remove(@Param('id') id: string) {
    await this.countryService.remove(+id).then((result) => {
      return apiResponse(true, 'Country Deleted Successfully');
    })
  }
}