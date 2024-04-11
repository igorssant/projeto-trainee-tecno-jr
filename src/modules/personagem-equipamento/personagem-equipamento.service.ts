import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePersonagemEquipamentoDto } from './dto/create-personagem-equipamento.dto';
import { UpdatePersonagemEquipamentoDto } from './dto/update-personagem-equipamento.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonagemEquipamento } from './entities/personagem-equipamento.entity';
import { Repository } from 'typeorm';
import { EquipamentosQueryDto } from './dto/equipamentos-query.dto';

@Injectable()
export class PersonagemEquipamentoService {
  constructor(
    @InjectRepository(PersonagemEquipamento)
    private personagemEquipamentoRepository: Repository<PersonagemEquipamento>,
  ) {}

  async create(createPersonagemEquipamentoDto: CreatePersonagemEquipamentoDto) {
    return await this.personagemEquipamentoRepository.save(
      createPersonagemEquipamentoDto,
    );
  }

  async findByQuery(equipamentosQueryDto: EquipamentosQueryDto) {
    const { equipamentoId, personagemId } = equipamentosQueryDto;

    try {
      let options: any = {};

      if (equipamentoId) {
        options = { ...options, where: { equipamentoId } };
      }

      if (personagemId) {
        options = { ...options, where: { ...options.where, personagemId } };
      }

      return await this.personagemEquipamentoRepository.find(options);
    } catch (error) {
      throw new NotFoundException('Falha ao retornar os equipamentos.');
    }
  }

  async findOne(id: number) {
    try {
      return await this.personagemEquipamentoRepository.findOneByOrFail({ id });
    } catch (error) {
      throw new NotFoundException(
        'Relação Persoangem-Equipamento não encontrada.',
      );
    }
  }

  async update(
    id: number,
    updatePersonagemEquipamentoDto: UpdatePersonagemEquipamentoDto,
  ) {
    // VERIFICA SE O PERSONAGEM REALMENTE TEM TAL EQUIPAMENTO
    // SE NÃO POSSUIR, ENTÃO O PROGRAMA ABORTA A EXECUÇÃO
    await this.findOne(id);
    return await this.personagemEquipamentoRepository.update(
      id,
      updatePersonagemEquipamentoDto,
    );
  }

  async remove(id: number) {
    // VERIFICA SE O PERSONAGEM REALMENTE TEM TAL EQUIPAMENTO
    // SE NÃO POSSUIR, ENTÃO O PROGRAMA ABORTA A EXECUÇÃO
    await this.findOne(id);
    return await this.personagemEquipamentoRepository.delete(id);
  }
}
