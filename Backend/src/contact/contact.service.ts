import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { Contact } from './entities/contact.entity';
import { MailService } from 'src/mail/mail.service';

@Injectable()
export class ContactService {

  constructor(
    @InjectRepository(Contact)
    private contactRepository: Repository<Contact>,
    private readonly mailService: MailService
  ) {}

  async create(createContactDto: CreateContactDto) {
    try {
      const contact = this.contactRepository.create(createContactDto);
      const savedContact = await this.contactRepository.save(contact);
      await this.mailService.create(savedContact);
      return savedContact;
    } catch (e) {
      console.log(e);
    }
  }

  findAll() {
    return this.contactRepository.find();
  }

  async findOne(id: number) {
    const contact = await this.contactRepository.findOne({ where: { id } });
    if (!contact) throw new NotFoundException(`Contact with ID ${id} not found`);
    return contact;
  }

  async update(id: number, updateContactDto: UpdateContactDto) {
    const contact = await this.contactRepository.preload({
      id,
      ...updateContactDto,
    });
    if (!contact) throw new NotFoundException(`Contact with ID ${id} not found`);
    return this.contactRepository.save(contact);
  }

  async remove(id: number) {
    const contact = await this.findOne(id);
    return this.contactRepository.remove(contact);
  }
}