import { Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Country } from './entities/country.entity';
import { cloudinary } from 'src/cloudinary.provider';
import * as streamifier from 'streamifier';

@Injectable()
export class CountryService {
  constructor(
    @InjectRepository(Country)
    private readonly countryRepository: Repository<Country>,
  ) { }

  async uploadToCloudinary(file: Express.Multer.File): Promise<string> {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream((error, result) => {
        if (error) return reject(error);
        resolve(result!.secure_url);
      });
      streamifier.createReadStream(file.buffer).pipe(uploadStream);
    });
  }

  async create(files: any, createCountryDto: CreateCountryDto) {
    const mainImageUrl = await this.uploadToCloudinary(files.mainImage[0]);
    const extraImg1Url = files.extraImg1 ? await this.uploadToCloudinary(files.extraImg1[0]) : null;
    const extraImg2Url = files.extraImg2 ? await this.uploadToCloudinary(files.extraImg2[0]) : null;
    const flagUrl = await this.uploadToCloudinary(files.flag[0]);

    const country = this.countryRepository.create({
      name: createCountryDto.name,
      price: createCountryDto.price,
      mainImage: mainImageUrl,
      extraImg1: extraImg1Url,
      extraImg2: extraImg2Url,
      flag: flagUrl,
    });


    return this.countryRepository.save(country);
  }
}
