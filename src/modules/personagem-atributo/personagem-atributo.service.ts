import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePersonagemAtributoDto } from './dto/create-personagem-atributo.dto';
import { UpdatePersonagemAtributoDto } from './dto/update-personagem-atributo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonagemAtributo } from './entities/personagem-atributo.entity';
import { Repository } from 'typeorm';
import { AtributosQueryDto } from './dto/atributos-query.dto';

@Injectable()
export class PersonagemAtributoService {
  constructor(
    @InjectRepository(PersonagemAtributo)
    private personagemAtributoRepository: Repository<PersonagemAtributo>,
  ) {}

  async create(createPersonagemAtributoDto: CreatePersonagemAtributoDto) {
    return await this.personagemAtributoRepository.save(
      createPersonagemAtributoDto,
    );
  }

  async findByQuery(atributosQueryDto: AtributosQueryDto) {
    const { atributoId, personagemId } = atributosQueryDto;

    try {
      let options: any = {};

      if (atributoId) {
        options = { ...options, where: { atributoId } };
      }

      if (personagemId) {
        options = { ...options, where: { ...options.where, personagemId } };
      }

      return await this.personagemAtributoRepository.find(options);
    } catch (error) {
      throw new NotFoundException('Falha ao retornar as armaduras.');
    }
  }

  async findOne(id: number) {
    try {
      return await this.personagemAtributoRepository.findOneByOrFail({ id });
    } catch (error) {
      throw new NotFoundException(
        'Relação Personagem-Atributo não encontrada.',
      );
    }
  }

  async update(
    id: number,
    updatePersonagemAtributoDto: UpdatePersonagemAtributoDto,
  ) {
    // VERIFICA SE O PERSONAGEM REALMENTE TEM TAL ATRIBUTO
    // SE NÃO POSSUIR, ENTÃO O PROGRAMA ABORTA A EXECUÇÃO
    await this.findOne(id);
    return await this.personagemAtributoRepository.update(
      id,
      updatePersonagemAtributoDto,
    );
  }

  async remove(id: number) {
    // VERIFICA SE O PERSONAGEM REALMENTE TEM TAL ATRIBUTO
    // SE NÃO POSSUIR, ENTÃO O PROGRAMA ABORTA A EXECUÇÃO
    await this.findOne(id);
    return await this.personagemAtributoRepository.delete(id);
  }
}
