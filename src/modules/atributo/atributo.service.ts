import { Injectable } from '@nestjs/common';
import { CreateAtributoDto } from './dto/create-atributo.dto';
import { UpdateAtributoDto } from './dto/update-atributo.dto';

@Injectable()
export class AtributoService {
  create(createAtributoDto: CreateAtributoDto) {
    return 'This action adds a new atributo';
  }

  findAll() {
    return `This action returns all atributo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} atributo`;
  }

  update(id: number, updateAtributoDto: UpdateAtributoDto) {
    return `This action updates a #${id} atributo`;
  }

  remove(id: number) {
    return `This action removes a #${id} atributo`;
  }
}
