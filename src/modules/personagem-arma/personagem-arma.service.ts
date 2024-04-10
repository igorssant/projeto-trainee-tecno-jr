import { Injectable } from '@nestjs/common';
import { CreatePersonagemArmaDto } from './dto/create-personagem-arma.dto';
import { UpdatePersonagemArmaDto } from './dto/update-personagem-arma.dto';

@Injectable()
export class PersonagemArmaService {
  create(createPersonagemArmaDto: CreatePersonagemArmaDto) {
    return 'This action adds a new personagemArma';
  }

  findAll() {
    return `This action returns all personagemArma`;
  }

  findOne(id: number) {
    return `This action returns a #${id} personagemArma`;
  }

  update(id: number, updatePersonagemArmaDto: UpdatePersonagemArmaDto) {
    return `This action updates a #${id} personagemArma`;
  }

  remove(id: number) {
    return `This action removes a #${id} personagemArma`;
  }
}
