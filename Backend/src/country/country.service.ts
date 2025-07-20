import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
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

    const category = Array.isArray(createCountryDto.category)
      ? createCountryDto.category
      : (createCountryDto.category as string).split(',').map(c => c.trim());

    const region = Array.isArray(createCountryDto.region)
      ? createCountryDto.region
      : (createCountryDto.region as string).split(',').map(r => r.trim());

    const country = this.countryRepository.create({
      name: createCountryDto.name,
      price: createCountryDto.price,
      category,
      region,
      mainImage: mainImageUrl,
      extraImg1: extraImg1Url,
      extraImg2: extraImg2Url,
      flag: flagUrl,
    } as DeepPartial<Country>);

    return this.countryRepository.save(country);
  }

  async filterCountries(category?: string, region?: string): Promise<Country[]> {
    const query = this.countryRepository.createQueryBuilder('country');

    if (category) {
      const categories = category.split(',').map(c => c.trim());
      for (const cat of categories) {
        query.andWhere('country.category LIKE :cat', { cat: `%${cat}%` });
      }
    }

    if (region) {
      const regions = region.split(',').map(r => r.trim());
      for (const reg of regions) {
        query.andWhere('country.region LIKE :reg', { reg: `%${reg}%` });
      }
    }

    return query.getMany();
  }

  async findAll(): Promise<Country[]> {
    return this.countryRepository.find();
  }

  async remove(id: number): Promise<void> {
    const result = await this.countryRepository.delete(id);

    if (result.affected === 0)
      throw new NotFoundException(`Designation with ID ${id} not found.`)
  }
}