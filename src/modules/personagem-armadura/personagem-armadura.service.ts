import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePersonagemArmaduraDto } from './dto/create-personagem-armadura.dto';
import { UpdatePersonagemArmaduraDto } from './dto/update-personagem-armadura.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonagemArmadura } from './entities/personagem-armadura.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PersonagemArmaduraService {
  constructor(
    @InjectRepository(PersonagemArmadura)
    private personagemArmaduraRepository: Repository<PersonagemArmadura>,
  ) {}

  async create(createPersonagemArmaduraDto: CreatePersonagemArmaduraDto) {
    return await this.personagemArmaduraRepository.save(
      createPersonagemArmaduraDto,
    );
  }

  async findAll() {
    return `This action returns all personagemArmadura`;
  }

  async findOne(armaduraId: number, personagemId: number) {
    try {
      return await this.personagemArmaduraRepository.findOneByOrFail({
        armaduraId,
        personagemId,
      });
    } catch (error) {
      throw new NotFoundException('Relação Jogador-Armadura não encontrada.');
    }
  }

  async update(
    armaduraId: number,
    personagemId: number,
    updatePersonagemArmaduraDto: UpdatePersonagemArmaduraDto,
  ) {
    // VERIFICA SE O PERSONAGEM REALMENTE TEM TAL ARMADURA
    // SE NÃO POSSUIR, ENTÃO O PROGRAMA ABORTA A EXECUÇÃO
    await this.findOne(armaduraId, personagemId);
    return await this.personagemArmaduraRepository.update(
      [armaduraId, personagemId],
      updatePersonagemArmaduraDto,
    );
  }

  async remove(armaduraId: number, personagemId: number) {
    // VERIFICA SE O PERSONAGEM REALMENTE TEM TAL ARMA
    // SE NÃO POSSUIR, ENTÃO O PROGRAMA ABORTA A EXECUÇÃO
    await this.findOne(armaduraId, personagemId);
    return await this.personagemArmaduraRepository.delete([
      armaduraId,
      personagemId,
    ]);
  }
}
