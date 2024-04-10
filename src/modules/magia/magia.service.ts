import { Injectable } from '@nestjs/common';
import { CreateMagiaDto } from './dto/create-magia.dto';
import { UpdateMagiaDto } from './dto/update-magia.dto';

@Injectable()
export class MagiaService {
  create(createMagiaDto: CreateMagiaDto) {
    return 'This action adds a new magia';
  }

  findAll() {
    return `This action returns all magia`;
  }

  findOne(id: number) {
    return `This action returns a #${id} magia`;
  }

  update(id: number, updateMagiaDto: UpdateMagiaDto) {
    return `This action updates a #${id} magia`;
  }

  remove(id: number) {
    return `This action removes a #${id} magia`;
  }
}
