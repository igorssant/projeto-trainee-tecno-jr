import { Injectable } from '@nestjs/common';
import { CreateArmaDto } from './dto/create-arma.dto';
import { UpdateArmaDto } from './dto/update-arma.dto';

@Injectable()
export class ArmaService {
  create(createArmaDto: CreateArmaDto) {
    return 'This action adds a new arma';
  }

  findAll() {
    return `This action returns all arma`;
  }

  findOne(id: number) {
    return `This action returns a #${id} arma`;
  }

  update(id: number, updateArmaDto: UpdateArmaDto) {
    return `This action updates a #${id} arma`;
  }

  remove(id: number) {
    return `This action removes a #${id} arma`;
  }
}
