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
      throw new NotFoundException('Relação Jogador-Arma não encontrada.');
    }
  }

  async findByQuery(armasQueryDto: ArmasQueryDto) {
    const { armaId, personagemId } = armasQueryDto;

    let query = this.personagemArmaRepository.createQueryBuilder('pa');

    if (armaId) {
      query = query.andWhere('pa.armaId = :armaId', { armaId });
    }

    if (personagemId) {
      query = query.andWhere('pa.personagemId = :personagemId', {
        personagemId,
      });
    }

    return await query.getMany();
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
