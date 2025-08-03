import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { DataSource, DeepPartial, Repository } from 'typeorm';
import { Blog } from './entities/blog.entity';
import * as streamifier from 'streamifier';
import { InjectRepository } from '@nestjs/typeorm';
import { cloudinary } from 'src/cloudinary.provider';

@Injectable()
export class BlogService {
  constructor(

    @InjectRepository(Blog)
    private readonly blogRepository: Repository<Blog>,
    private dataSource: DataSource,
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

  async create(files: any, createBlogDto: CreateBlogDto) {
    const image = await this.uploadToCloudinary(files.image[0]);

    const blog = this.blogRepository.create({
      title: createBlogDto.title,
      description: createBlogDto.description,
      image: image,
    } as DeepPartial<Blog>);

    return this.blogRepository.save(blog);
  }

  async update(id: number, updateBlogDto: UpdateBlogDto, files?: any): Promise<Blog> {
    const country = await this.blogRepository.findOne({ where: { id } });

    if (!country) {
      throw new NotFoundException(`Blog with ID ${id} not found.`);
    }

    const updated: Partial<Blog> = {
      ...country,
      ...updateBlogDto,
    };

    if (files) {
      if (files.mainImage) {
        updated.image = await this.uploadToCloudinary(files.image[0]);
      }
    }


    return this.blogRepository.save(updated);
  }

  async findOne(id: number): Promise<Blog> {
    const blog = await Blog.existingBlog({ where: { id } }, this.dataSource);


    if (!blog) {
      throw new NotFoundException(`Blog with ID ${id} not found.`);
    }

    return blog;
  }

  async findAll(): Promise<Blog[]> {
    return this.blogRepository.find();
  }

  async remove(id: number): Promise<void> {
    const result = await this.blogRepository.delete(id);

    if (result.affected === 0)
      throw new NotFoundException(`Designation with ID ${id} not found.`)
  }
}