import { Injectable } from '@nestjs/common';
import { CreatePersonagemEquipamentoDto } from './dto/create-personagem-equipamento.dto';
import { UpdatePersonagemEquipamentoDto } from './dto/update-personagem-equipamento.dto';

@Injectable()
export class PersonagemEquipamentoService {
  create(createPersonagemEquipamentoDto: CreatePersonagemEquipamentoDto) {
    return 'This action adds a new personagemEquipamento';
  }

  findAll() {
    return `This action returns all personagemEquipamento`;
  }

  findOne(id: number) {
    return `This action returns a #${id} personagemEquipamento`;
  }

  update(id: number, updatePersonagemEquipamentoDto: UpdatePersonagemEquipamentoDto) {
    return `This action updates a #${id} personagemEquipamento`;
  }

  remove(id: number) {
    return `This action removes a #${id} personagemEquipamento`;
  }
}
