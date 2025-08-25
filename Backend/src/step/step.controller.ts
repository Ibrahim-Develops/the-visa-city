import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { StepService } from './step.service';
import { CreateStepDto } from './dto/create-step.dto';
import { UpdateStepDto } from './dto/update-step.dto';

@Controller('steps')
export class StepController {
  constructor(private readonly stepService: StepService) {}

  @Post('create')
  create(@Body() dto: CreateStepDto) {
    return this.stepService.create(dto);
  }

  @Get()
  findAll() {
    return this.stepService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stepService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateStepDto) {
    return this.stepService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stepService.remove(+id);
  }
}
