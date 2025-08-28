import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Step } from './entities/step.entity';
import { CreateStepDto } from './dto/create-step.dto';
import { UpdateStepDto } from './dto/update-step.dto';

@Injectable()
export class StepService {
  constructor(@InjectRepository(Step) private stepRepo: Repository<Step>) { }

   async create(dto: CreateStepDto) {
    const step = this.stepRepo.create({
      steps: dto.steps,
      country: { id: dto.countryId },
    });

    return this.stepRepo.save(step);
  }

  async findAll(): Promise<Step[]> {
    return this.stepRepo.find();
  }

  async findOne(id: number): Promise<Step> {
    const step = await this.stepRepo.findOne({ where: { id } });
    if (!step) throw new NotFoundException('Step not found');
    return step;
  }

  async update(id: number, dto: UpdateStepDto): Promise<Step> {
  await this.findOne(id); 
  await this.stepRepo.update(id, dto);
  return this.findOne(id); 
}


  async remove(id: number): Promise<void> {
    const step = await this.findOne(id);
    await this.stepRepo.remove(step);
  }
}
