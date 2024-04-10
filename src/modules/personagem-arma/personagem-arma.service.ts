import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePersonagemArmaDto } from './dto/create-personagem-arma.dto';
import { UpdatePersonagemArmaDto } from './dto/update-personagem-arma.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonagemArma } from './entities/personagem-arma.entity';
import { Repository } from 'typeorm';

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

  async findOne(armaId: number, personagemId: number) {
    try {
      return await this.personagemArmaRepository.findOneByOrFail({
        armaId,
        personagemId,
      });
    } catch (error) {
      throw new NotFoundException('Relação Jogador-Arma não encontrada.');
    }
  }

  async update(
    armaId: number,
    personagemId: number,
    updatePersonagemArmaDto: UpdatePersonagemArmaDto,
  ) {
    // VERIFICA SE O PERSONAGEM REALMENTE TEM TAL ARMA
    // SE NÃO POSSUIR, ENTÃO O PROGRAMA ABORTA A EXECUÇÃO
    await this.findOne(armaId, personagemId);
    return await this.personagemArmaRepository.update(
      [armaId, personagemId],
      updatePersonagemArmaDto,
    );
  }

  async remove(armaId: number, personagemId: number) {
    // VERIFICA SE O PERSONAGEM REALMENTE TEM TAL ARMA
    // SE NÃO POSSUIR, ENTÃO O PROGRAMA ABORTA A EXECUÇÃO
    await this.findOne(armaId, personagemId);
    return await this.personagemArmaRepository.delete([armaId, personagemId]);
  }
}
