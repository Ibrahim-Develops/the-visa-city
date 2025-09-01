import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { StoriesService } from './stories.service';
import { CreateStoryDto } from './dto/create-story.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@Controller('stories')
export class StoriesController {
  constructor(private readonly storiesService: StoriesService) { }

  @Post('create')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'image' },
    ])
  )
  create(
    @UploadedFiles() files: { image?: Express.Multer.File[]; },
    @Body() createStoryDto: CreateStoryDto,
  ) {
    return this.storiesService.create(files, createStoryDto);
  }

  @Get('all')
  findAll() {
    return this.storiesService.findAll();
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.storiesService.remove(+id);
  }
}