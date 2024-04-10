import { Injectable } from '@nestjs/common';
import { CreatePersonagemPoderDto } from './dto/create-personagem-poder.dto';
import { UpdatePersonagemPoderDto } from './dto/update-personagem-poder.dto';

@Injectable()
export class PersonagemPoderService {
  create(createPersonagemPoderDto: CreatePersonagemPoderDto) {
    return 'This action adds a new personagemPoder';
  }

  findAll() {
    return `This action returns all personagemPoder`;
  }

  findOne(id: number) {
    return `This action returns a #${id} personagemPoder`;
  }

  update(id: number, updatePersonagemPoderDto: UpdatePersonagemPoderDto) {
    return `This action updates a #${id} personagemPoder`;
  }

  remove(id: number) {
    return `This action removes a #${id} personagemPoder`;
  }
}
