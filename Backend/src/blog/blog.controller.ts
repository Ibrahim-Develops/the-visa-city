import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { apiResponse } from 'src/helper';
import { UpdateBlogDto } from './dto/update-blog.dto';

@ApiBearerAuth()
@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) { }

  @Post('create')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'image' },
    ])
  )
  create(
    @UploadedFiles() files: { image?: Express.Multer.File[]; },
    @Body() createBlogDto: CreateBlogDto,
  ) {
    return this.blogService.create(files, createBlogDto);
  }

  @Patch('update/:id')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'image', maxCount: 1 },
    ])
  )
  async update(
    @Param('id') id: string,
    @UploadedFiles() files: { image?: Express.Multer.File[] },
    @Body() updateBlogDto: UpdateBlogDto,
  ) {
    const updated = await this.blogService.update(+id, updateBlogDto, files);
    return apiResponse(true, 'Blog updated successfully', updated);
  }

  @Get('all')
  async findAll() {
    const blogs = await this.blogService.findAll();
    return apiResponse(true, 'All Blogs fetched successfully', blogs);
  }
  
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const blog = await this.blogService.findOne(+id);
    return apiResponse(true, 'Blog fetched successfully', blog);
  }

  @Delete('delete/:id')
  async remove(@Param('id') id: string) {
    await this.blogService.remove(+id).then((result) => {
      return apiResponse(true, 'Blog Deleted Successfully');
    })
  }

}
