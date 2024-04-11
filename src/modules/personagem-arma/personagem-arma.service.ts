import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePersonagemArmaDto } from './dto/create-personagem-arma.dto';
import { UpdatePersonagemArmaDto } from './dto/update-personagem-arma.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonagemArma } from './entities/personagem-arma.entity';
import { Repository } from 'typeorm';
import { ArmasQueryDto } from './dto/armas-query.dto';

@Injectable()
export class PersonagemArmaService {
  constructor(
    @InjectRepository(PersonagemArma)
    private personagemArmaRepository: Repository<PersonagemArma>,
  ) {}

  async create(createPersonagemArmaDto: CreatePersonagemArmaDto) {
    return await this.personagemArmaRepository.save(createPersonagemArmaDto);
  }

  async findAll() {
    return await this.personagemArmaRepository.find();
  }

  async findOne(id: number) {
    try {
      return await this.personagemArmaRepository.findOneByOrFail({ id });
    } catch (error) {
      throw new NotFoundException('Relação Personagem-Arma não encontrada.');
    }
  }

  async findByQuery(armasQueryDto: ArmasQueryDto) {
    const { armaId, personagemId } = armasQueryDto;

    try {
      let options: any = {};

      if (armaId) {
        options = { ...options, where: { armaId } };
      }

      if (personagemId) {
        options = { ...options, where: { ...options.where, personagemId } };
      }

      return await this.personagemArmaRepository.find(options);
    } catch (error) {
      throw new NotFoundException('Falha ao retornar as armas.');
    }
  }

  async update(id: number, updatePersonagemArmaDto: UpdatePersonagemArmaDto) {
    // VERIFICA SE O PERSONAGEM REALMENTE TEM TAL ARMA
    // SE NÃO POSSUIR, ENTÃO O PROGRAMA ABORTA A EXECUÇÃO
    await this.findOne(id);
    return await this.personagemArmaRepository.update(
      id,
      updatePersonagemArmaDto,
    );
  }

  async remove(id: number) {
    // VERIFICA SE O PERSONAGEM REALMENTE TEM TAL ARMA
    // SE NÃO POSSUIR, ENTÃO O PROGRAMA ABORTA A EXECUÇÃO
    await this.findOne(id);
    return await this.personagemArmaRepository.delete(id);
  }
}
