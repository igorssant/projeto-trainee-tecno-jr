import { Injectable } from '@nestjs/common';
import { CreatePersonagemAtributoDto } from './dto/create-personagem-atributo.dto';
import { UpdatePersonagemAtributoDto } from './dto/update-personagem-atributo.dto';

@Injectable()
export class PersonagemAtributoService {
  create(createPersonagemAtributoDto: CreatePersonagemAtributoDto) {
    return 'This action adds a new personagemAtributo';
  }

  findAll() {
    return `This action returns all personagemAtributo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} personagemAtributo`;
  }

  update(id: number, updatePersonagemAtributoDto: UpdatePersonagemAtributoDto) {
    return `This action updates a #${id} personagemAtributo`;
  }

  remove(id: number) {
    return `This action removes a #${id} personagemAtributo`;
  }
}
