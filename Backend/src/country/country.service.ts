import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { Country } from './entities/country.entity';
import { cloudinary } from 'src/cloudinary.provider';
import * as streamifier from 'streamifier';
import { UpdateCountryDto } from './dto/update-country.dto';

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

    const category = createCountryDto.category
      ? Array.isArray(createCountryDto.category)
        ? createCountryDto.category
        : (createCountryDto.category as string).split(',').map(c => c.trim())
      : [];

    const region = createCountryDto.region
      ? Array.isArray(createCountryDto.region)
        ? createCountryDto.region
        : (createCountryDto.region as string).split(',').map(r => r.trim())
      : [];

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

  async findOne(id: number): Promise<Country> {
    const country = await this.countryRepository.findOne({ where: { id } });
    if (!country) {
      throw new NotFoundException(`Country with ID ${id} not found.`);
    }
    return country;
  }

  async update(id: number, updateCountryDto: UpdateCountryDto, files?: any): Promise<Country> {
    const country = await this.countryRepository.findOne({ where: { id } });

    if (!country) {
      throw new NotFoundException(`Country with ID ${id} not found.`);
    }

    const category = updateCountryDto.category
      ? Array.isArray(updateCountryDto.category)
        ? updateCountryDto.category
        : (updateCountryDto.category as string).split(',').map(c => c.trim())
      : country.category;

    const region = updateCountryDto.region
      ? Array.isArray(updateCountryDto.region)
        ? updateCountryDto.region
        : (updateCountryDto.region as string).split(',').map(r => r.trim())
      : country.region;

    const updated: Partial<Country> = {
      ...country,
      ...updateCountryDto,
      category,
      region,
    };

    if (files) {
      if (files.mainImage) {
        updated.mainImage = await this.uploadToCloudinary(files.mainImage[0]);
      }
      if (files.extraImg1) {
        updated.extraImg1 = await this.uploadToCloudinary(files.extraImg1[0]);
      }
      if (files.extraImg2) {
        updated.extraImg2 = await this.uploadToCloudinary(files.extraImg2[0]);
      }
      if (files.flag) {
        updated.flag = await this.uploadToCloudinary(files.flag[0]);
      }
    }

    return this.countryRepository.save(updated);
  }

  async remove(id: number): Promise<void> {
    const result = await this.countryRepository.delete(id);

    if (result.affected === 0)
      throw new NotFoundException(`Designation with ID ${id} not found.`)
  }
}