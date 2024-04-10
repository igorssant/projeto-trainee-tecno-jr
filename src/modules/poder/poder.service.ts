import { Injectable } from '@nestjs/common';
import { CreatePoderDto } from './dto/create-poder.dto';
import { UpdatePoderDto } from './dto/update-poder.dto';

@Injectable()
export class PoderService {
  create(createPoderDto: CreatePoderDto) {
    return 'This action adds a new poder';
  }

  findAll() {
    return `This action returns all poder`;
  }

  findOne(id: number) {
    return `This action returns a #${id} poder`;
  }

  update(id: number, updatePoderDto: UpdatePoderDto) {
    return `This action updates a #${id} poder`;
  }

  remove(id: number) {
    return `This action removes a #${id} poder`;
  }
}
