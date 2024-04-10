import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePersonagemDto } from './dto/create-personagem.dto';
import { UpdatePersonagemDto } from './dto/update-personagem.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Personagem } from './entities/personagem.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PersonagemService {
  constructor(
    @InjectRepository(Personagem)
    private personagemRepository: Repository<Personagem>,
  ) {}

  async create(createPersonagemDto: CreatePersonagemDto) {
    // VERIFICA SE O PERSONAGEM JÁ EXISTE
    // SE EXISTIR, ABORTA A EXECUÇÃO
    await this.findByNome(createPersonagemDto.nome);
    return await this.personagemRepository.save(createPersonagemDto);
  }

  async findAll() {
    return await this.personagemRepository.find();
  }

  async findOne(id: number) {
    try {
      return await this.personagemRepository.findOneByOrFail({ id });
    } catch (error) {
      throw new NotFoundException('Jogador não encontrado.');
    }
  }

  async update(id: number, updatePersonagemDto: UpdatePersonagemDto) {
    // VERIFICA SE O PERSONAGEM JÁ EXISTE PELO id
    // SE NÃO EXISTIR, ABORTA A EXECUÇÃO
    await this.findOne(id);
    return await this.personagemRepository.update(id, updatePersonagemDto);
  }

  async remove(id: number) {
    // VERIFICA SE O PERSONAGEM JÁ EXISTE PELO id
    // SE NÃO EXISTIR, ABORTA A EXECUÇÃO
    await this.findOne(id);
    return await this.personagemRepository.delete(id);
  }

  async findByNome(nome: string) {
    return await this.personagemRepository.findOneOrFail({
      where: { nome },
      select: ['nome', 'classe', 'origem', 'deus'],
    });
  }
}
