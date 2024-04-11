import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePersonagemPoderDto } from './dto/create-personagem-poder.dto';
import { UpdatePersonagemPoderDto } from './dto/update-personagem-poder.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonagemPoder } from './entities/personagem-poder.entity';
import { Repository } from 'typeorm';
import { PoderesQueryDto } from './dto/poderes-query.dto';

@Injectable()
export class PersonagemPoderService {
  constructor(
    @InjectRepository(PersonagemPoder)
    private personagemPoderRepository: Repository<PersonagemPoder>,
  ) {}

  async create(createPersonagemPoderDto: CreatePersonagemPoderDto) {
    return await this.personagemPoderRepository.save(createPersonagemPoderDto);
  }

  async findByQuery(poderesQueryDto: PoderesQueryDto) {
    const { poderId, personagemId } = poderesQueryDto;

    try {
      let options: any = {};

      if (poderId) {
        options = { ...options, where: { poderId } };
      }

      if (personagemId) {
        options = { ...options, where: { ...options.where, personagemId } };
      }

      return await this.personagemPoderRepository.find(options);
    } catch (error) {
      throw new NotFoundException('Falha ao retornar poderes.');
    }
  }

  async findOne(id: number) {
    try {
      return await this.personagemPoderRepository.findOneByOrFail({ id });
    } catch (error) {
      throw new NotFoundException('Relação Personagem-Poder não encontrada.');
    }
  }

  async update(id: number, updatePersonagemPoderDto: UpdatePersonagemPoderDto) {
    // VERIFICA SE O PERSONAGEM REALMENTE TEM TAL PODER
    // SE NÃO POSSUIR, ENTÃO O PROGRAMA ABORTA A EXECUÇÃO
    await this.findOne(id);
    return await this.personagemPoderRepository.update(
      id,
      updatePersonagemPoderDto,
    );
  }

  async remove(id: number) {
    // VERIFICA SE O PERSONAGEM REALMENTE TEM TAL PODER
    // SE NÃO POSSUIR, ENTÃO O PROGRAMA ABORTA A EXECUÇÃO
    await this.findOne(id);
    return await this.personagemPoderRepository.delete(id);
  }
}
