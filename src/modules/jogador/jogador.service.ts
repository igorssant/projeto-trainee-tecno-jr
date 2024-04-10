import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateJogadorDto } from './dto/create-jogador.dto';
import { UpdateJogadorDto } from './dto/update-jogador.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Jogador } from './entities/jogador.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class JogadorService {
  constructor(
    @InjectRepository(Jogador)
    private jogadorRepository: Repository<Jogador>,
  ) {}

  async create(createJogadorDto: CreateJogadorDto) {
    // VERIFICA SE O JOGADOR JÁ EXISTE
    // SE JÁ EXISTIR, ABORTA A EXECUÇÃO
    await this.findByNome(createJogadorDto.nome);

    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(createJogadorDto.senha, salt);

    createJogadorDto.senha = hash;
    const jogador = await this.jogadorRepository.save(createJogadorDto);
    delete jogador.senha;

    return jogador;
  }

  async findAll() {
    return await this.jogadorRepository.find();
  }

  async findOne(id: number) {
    try {
      return await this.jogadorRepository.findOneByOrFail({ id });
    } catch (error) {
      throw new NotFoundException('Jogador não encontrado.');
    }
  }

  async update(id: number, updateJogadorDto: UpdateJogadorDto) {
    // VERIFICA SE O JOGADOR REALMENTE EXISTE
    // SE NÃO EXISTIR, FALHA. CASO CONTRARIO CONTINUA
    await this.findOne(id);

    // VERIFICANDO SE O OBJETO RECEBIDO POSSUI SENHA
    if (updateJogadorDto.senha) {
      const salt = await bcrypt.genSalt();
      const hash = await bcrypt.hash(updateJogadorDto.senha, salt);
      updateJogadorDto.senha = hash;
    }

    return await this.jogadorRepository.update(id, updateJogadorDto);
  }

  async remove(id: number) {
    // VERIFICA DE JOGADOR EXISTE
    // SE EXISTIR, CONTINUA. CASO CONTRARIO, PARA
    await this.findOne(id);
    return await this.jogadorRepository.delete(id);
  }

  async findByNome(nome: string) {
    return await this.jogadorRepository.findOneOrFail({
      where: { nome },
      select: ['nome', 'personagem', 'mestre'],
    });
  }
}
