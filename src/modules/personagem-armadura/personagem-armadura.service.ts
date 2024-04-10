import { Injectable } from '@nestjs/common';
import { CreatePersonagemArmaduraDto } from './dto/create-personagem-armadura.dto';
import { UpdatePersonagemArmaduraDto } from './dto/update-personagem-armadura.dto';

@Injectable()
export class PersonagemArmaduraService {
  create(createPersonagemArmaduraDto: CreatePersonagemArmaduraDto) {
    return 'This action adds a new personagemArmadura';
  }

  findAll() {
    return `This action returns all personagemArmadura`;
  }

  findOne(id: number) {
    return `This action returns a #${id} personagemArmadura`;
  }

  update(id: number, updatePersonagemArmaduraDto: UpdatePersonagemArmaduraDto) {
    return `This action updates a #${id} personagemArmadura`;
  }

  remove(id: number) {
    return `This action removes a #${id} personagemArmadura`;
  }
}
