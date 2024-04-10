import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateArmaDto } from './dto/create-arma.dto';
import { UpdateArmaDto } from './dto/update-arma.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Arma } from './entities/arma.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ArmaService {
  constructor(
    @InjectRepository(Arma)
    private armaRepository: Repository<Arma>,
  ) {}

  async create(createArmaDto: CreateArmaDto) {
    // VERIFICA SE A ARMA JÁ EXISTE
    // SE JÁ EXISTIR NÃO SERÁ CADASTRADA NOVAMENTE
    await this.findByNome(createArmaDto.nome);
    return await this.armaRepository.save(createArmaDto);
  }

  async findAll() {
    return await this.armaRepository.find();
  }

  async findOne(id: number) {
    try {
      return await this.armaRepository.findOneByOrFail({ id });
    } catch (error) {
      throw new NotFoundException('Arma não existe.');
    }
  }

  async update(id: number, updateArmaDto: UpdateArmaDto) {
    return this.armaRepository.update(id, updateArmaDto);
  }

  async remove(id: number) {
    // VERIFICA SE A ARMA EXISTE PELO id
    // SE EXISTIR, EXCLUI. CASO CONTRARIO, GERA ERRO
    await this.findOne(id);
    return await this.armaRepository.delete(id);
  }

  async findByNome(nome: string) {
    return await this.armaRepository.findOneOrFail({
      where: { nome },
      select: ['id', 'nome', 'descricao', 'dano', 'preco'],
    });
  }
}
