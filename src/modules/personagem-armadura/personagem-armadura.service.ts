import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePersonagemArmaduraDto } from './dto/create-personagem-armadura.dto';
import { UpdatePersonagemArmaduraDto } from './dto/update-personagem-armadura.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonagemArmadura } from './entities/personagem-armadura.entity';
import { Repository } from 'typeorm';
import { ArmadurasQueryDto } from './dto/armaduras-query.dto';

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

  async findOne(id: number) {
    try {
      return await this.personagemArmaduraRepository.findOneByOrFail({ id });
    } catch (error) {
      throw new NotFoundException('Relação Jogador-Armadura não encontrada.');
    }
  }

  async findByQuery(armadurasQueryDto: ArmadurasQueryDto) {
    const { armaduraId, personagemId } = armadurasQueryDto;
    let query = this.personagemArmaduraRepository.createQueryBuilder('pa');

    if (armaduraId) {
      query = query.andWhere('pa.armaduraId = :armaduraId', {
        armaduraId,
      });
    }

    if (personagemId) {
      query = query.andWhere('pa.personagemId = :personagemId', {
        personagemId,
      });
    }

    try {
      return await query.getMany();
    } catch (error) {
      throw new NotFoundException('Falha ao retornar as armaduras.');
    }
  }

  async update(
    id: number,
    updatePersonagemArmaduraDto: UpdatePersonagemArmaduraDto,
  ) {
    // VERIFICA SE O PERSONAGEM REALMENTE TEM TAL ARMADURA
    // SE NÃO POSSUIR, ENTÃO O PROGRAMA ABORTA A EXECUÇÃO
    await this.findOne(id);
    return await this.personagemArmaduraRepository.update(
      id,
      updatePersonagemArmaduraDto,
    );
  }

  async remove(id: number) {
    // VERIFICA SE O PERSONAGEM REALMENTE TEM TAL ARMA
    // SE NÃO POSSUIR, ENTÃO O PROGRAMA ABORTA A EXECUÇÃO
    await this.findOne(id);
    return await this.personagemArmaduraRepository.delete(id);
  }
}
