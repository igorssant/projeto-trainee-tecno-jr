import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePoderDto } from './dto/create-poder.dto';
import { UpdatePoderDto } from './dto/update-poder.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Poder } from './entities/poder.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PoderService {
  constructor(
    @InjectRepository(Poder)
    private poderRepository: Repository<Poder>,
  ) {}

  async create(createPoderDto: CreatePoderDto) {
    // VERIFICA SE PODER JÁ EXISTE
    // SE JÁ EXISTIR, ABORTA A EXECUÇÃO
    await this.findByNome(createPoderDto.nome);
    return await this.poderRepository.save(createPoderDto);
  }

  async findAll() {
    return await this.poderRepository.find();
  }

  async findOne(id: number) {
    try {
      return await this.poderRepository.findOneByOrFail({ id });
    } catch (error) {
      throw new NotFoundException('Poder não encontrado.');
    }
  }

  async update(id: number, updatePoderDto: UpdatePoderDto) {
    // VERIFICA SE PODER EXISTE
    // SE NÃO EXISTIR, ABORTA A EXECUÇÃO
    await this.findOne(id);
    return await this.poderRepository.update(id, updatePoderDto);
  }

  async remove(id: number) {
    // VERIFICA SE PODER EXISTE
    // SE NÃO EXISTIR, ABORTA A EXECUÇÃO
    await this.findOne(id);
    return await this.poderRepository.delete(id);
  }

  async findByNome(nome: string) {
    return await this.poderRepository.findOneOrFail({
      where: { nome },
      select: ['id', 'nome', 'custo', 'efeito', 'alvo', 'duracao'],
    });
  }
}
