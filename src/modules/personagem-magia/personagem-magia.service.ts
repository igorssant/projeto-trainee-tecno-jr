import { Injectable } from '@nestjs/common';
import { CreatePersonagemMagiaDto } from './dto/create-personagem-magia.dto';
import { UpdatePersonagemMagiaDto } from './dto/update-personagem-magia.dto';

@Injectable()
export class PersonagemMagiaService {
  create(createPersonagemMagiaDto: CreatePersonagemMagiaDto) {
    return 'This action adds a new personagemMagia';
  }

  findAll() {
    return `This action returns all personagemMagia`;
  }

  findOne(id: number) {
    return `This action returns a #${id} personagemMagia`;
  }

  update(id: number, updatePersonagemMagiaDto: UpdatePersonagemMagiaDto) {
    return `This action updates a #${id} personagemMagia`;
  }

  remove(id: number) {
    return `This action removes a #${id} personagemMagia`;
  }
}
