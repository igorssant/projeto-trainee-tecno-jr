import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEquipamentoDto } from './dto/create-equipamento.dto';
import { UpdateEquipamentoDto } from './dto/update-equipamento.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Equipamento } from './entities/equipamento.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EquipamentoService {
  constructor(
    @InjectRepository(Equipamento)
    private equipamentoRepository: Repository<Equipamento>,
  ) {}

  async create(createEquipamentoDto: CreateEquipamentoDto) {
    return await this.equipamentoRepository.save(createEquipamentoDto);
  }

  async findAll() {
    return await this.equipamentoRepository.find();
  }

  async findOne(id: number) {
    try {
      return await this.equipamentoRepository.findOneByOrFail({ id });
    } catch (error) {
      throw new NotFoundException('Equipamento não existe.');
    }
  }

  async update(id: number, updateEquipamentoDto: UpdateEquipamentoDto) {
    return await this.equipamentoRepository.update(id, updateEquipamentoDto);
  }

  async remove(id: number) {
    return `This action removes a #${id} equipamento`;
  }
}
