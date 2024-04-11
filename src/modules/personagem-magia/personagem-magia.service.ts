import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePersonagemMagiaDto } from './dto/create-personagem-magia.dto';
import { UpdatePersonagemMagiaDto } from './dto/update-personagem-magia.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonagemMagia } from './entities/personagem-magia.entity';
import { Repository } from 'typeorm';
import { MagiasQueryDto } from './dto/magias-query.dto';

@Injectable()
export class PersonagemMagiaService {
  constructor(
    @InjectRepository(PersonagemMagia)
    private persoangemMagiaRepository: Repository<PersonagemMagia>,
  ) {}

  async create(createPersonagemMagiaDto: CreatePersonagemMagiaDto) {
    // VERIFICA SE O PERSONAGEM REALMENTE JÁ TEM TAL MAGIA
    // SE JÁ POSSUIR, ENTÃO O PROGRAMA ABORTA A EXECUÇÃO
    await this.personagemJaTemMagia(
      createPersonagemMagiaDto.magiaId,
      createPersonagemMagiaDto.personagemId,
    );
    return await this.persoangemMagiaRepository.save(createPersonagemMagiaDto);
  }

  async findByQuery(magiasQueryDto: MagiasQueryDto) {
    const { magiaId, personagemId } = magiasQueryDto;

    try {
      let options: any = {};

      if (magiaId) {
        options = { ...options, where: { magiaId } };
      }

      if (personagemId) {
        options = { ...options, where: { ...options.where, personagemId } };
      }

      return await this.persoangemMagiaRepository.find(options);
    } catch (error) {
      throw new NotFoundException('Falha ao retornar as armas.');
    }
  }

  async findOne(id: number) {
    try {
      return await this.persoangemMagiaRepository.findOneByOrFail({ id });
    } catch (error) {
      throw new NotFoundException('Relação Jogador-Arma não encontrada.');
    }
  }

  async update(id: number, updatePersonagemMagiaDto: UpdatePersonagemMagiaDto) {
    // VERIFICA SE O PERSONAGEM REALMENTE TEM TAL MAGIA
    // SE NÃO POSSUIR, ENTÃO O PROGRAMA ABORTA A EXECUÇÃO
    await this.findOne(id);
    return await this.persoangemMagiaRepository.update(
      id,
      updatePersonagemMagiaDto,
    );
  }

  async remove(id: number) {
    // VERIFICA SE O PERSONAGEM REALMENTE TEM TAL MAGIA
    // SE NÃO POSSUIR, ENTÃO O PROGRAMA ABORTA A EXECUÇÃO
    await this.findOne(id);
    return await this.persoangemMagiaRepository.delete(id);
  }

  private async personagemJaTemMagia(idMagia: number, idPersonagem: number) {
    return await this.persoangemMagiaRepository.findOne({
      where: {
        magiaId: idMagia,
        personagemId: idPersonagem,
      },
    });
  }
}
