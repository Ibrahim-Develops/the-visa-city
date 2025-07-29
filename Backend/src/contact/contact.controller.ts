import { Controller, Post, Body, Delete, Param, Get, Patch } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { apiResponse } from 'src/helper';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post('add')
  async create(@Body() createContactDto: CreateContactDto) {
    return this.contactService.create(createContactDto).then((result) => {
      return apiResponse(true, 'Contact created successfully', result);
    });
  }

  @Get('all')
  async findAll() {
    return this.contactService.findAll().then((result) => {
      return apiResponse(true, 'All contacts fetched successfully', result);
    });
  }

  @Patch('update/:id')
  async update(@Param('id') id: string, @Body() updateContactDto: UpdateContactDto) {
    return this.contactService.update(+id, updateContactDto).then((result) => {
      return apiResponse(true, 'Contact updated successfully', result);
    });
  }

  @Delete('delete/:id')
  async remove(@Param('id') id: string) {
    return this.contactService.remove(+id).then(() => {
      return apiResponse(true, 'Contact deleted successfully');
    });
  }
}