import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAtributoDto } from './dto/create-atributo.dto';
import { UpdateAtributoDto } from './dto/update-atributo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Atributo } from './entities/atributo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AtributoService {
  constructor(
    @InjectRepository(Atributo)
    private atributoRepository: Repository<Atributo>,
  ) {}

  async create(createAtributoDto: CreateAtributoDto) {
    return await this.atributoRepository.save(createAtributoDto);
  }

  async findAll() {
    return await this.atributoRepository.find();
  }

  async findOne(id: number) {
    try {
      return await this.atributoRepository.findOneByOrFail({ id });
    } catch (error) {
      throw new NotFoundException('Atributo não encontrado.');
    }
  }

  async update(id: number, updateAtributoDto: UpdateAtributoDto) {
    return await this.atributoRepository.update(id, updateAtributoDto);
  }

  async remove(id: number) {
    // VERIFICA SE O ATRIBUTO EXISTE PELO id
    // SE EXISTIR, EXCLUI. CASO CONTRARIO, GERA ERRO
    await this.findOne(id);
    return await this.atributoRepository.delete(id);
  }
}
