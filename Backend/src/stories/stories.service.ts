import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial } from 'typeorm';
import { Story } from './entities/story.entity';
import * as streamifier from 'streamifier';
import { cloudinary } from 'src/cloudinary.provider';
import { CreateStoryDto } from './dto/create-story.dto';

@Injectable()
export class StoriesService {
  constructor(
    @InjectRepository(Story)
    private readonly storyRepository: Repository<Story>,
  ) {}

  async uploadToCloudinary(file: Express.Multer.File): Promise<string> {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream((error, result) => {
        if (error) return reject(error);
        resolve(result!.secure_url);
      });
      streamifier.createReadStream(file.buffer).pipe(uploadStream);
    });
  }

  async create(files: { image?: Express.Multer.File[] }, createStoryDto: CreateStoryDto) {
    let imageUrl: string | null = null;

    if (files?.image && files.image[0]) {
      imageUrl = await this.uploadToCloudinary(files.image[0]);
    }

    const story = this.storyRepository.create({
      ...createStoryDto,
      image: imageUrl,
    } as DeepPartial<Story>);

    return this.storyRepository.save(story);
  }

  async findAll() {
    return this.storyRepository.find();
  }

  async remove(id: number) {
    const story = await this.storyRepository.findOne({ where: { id } });
    if (!story) throw new NotFoundException(`Story with id ${id} not found`);
    await this.storyRepository.remove(story);
    return { message: `Story with id ${id} deleted successfully` };
  }
}
