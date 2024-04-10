import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMagiaDto } from './dto/create-magia.dto';
import { UpdateMagiaDto } from './dto/update-magia.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Magia } from './entities/magia.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MagiaService {
  constructor(
    @InjectRepository(Magia)
    private magiaRepository: Repository<Magia>,
  ) {}

  async create(createMagiaDto: CreateMagiaDto) {
    // VERIFICA SE A MAGIA JÁ EXISTE
    // SÓ SALVA SE NÃO EXISTIR
    await this.findByNome(createMagiaDto.nome);
    return await this.magiaRepository.save(createMagiaDto);
  }

  async findAll() {
    return await this.magiaRepository.find();
  }

  async findOne(id: number) {
    try {
      return await this.magiaRepository.findOneByOrFail({ id });
    } catch (error) {
      throw new NotFoundException('Magia não encontrada.');
    }
  }

  async update(id: number, updateMagiaDto: UpdateMagiaDto) {
    // VERIFICA SE A MAGIA EXISTE
    // SE NÃO EXISTIR, ABORTA A OPERAÇÃO
    await this.findOne(id);
    return await this.magiaRepository.update(id, updateMagiaDto);
  }

  async remove(id: number) {
    // VERIFICA SE MAGIA EXISTE
    // SE NÃO EXISTIR ABORTA. CASO CONTRARIO, CONTINUA
    await this.findOne(id);
    return await this.magiaRepository.delete(id);
  }

  async findByNome(nome: string) {
    return await this.magiaRepository.findOneOrFail({
      where: { nome },
      select: ['nome', 'efeito', 'alvo', 'duracao'],
    });
  }
}
